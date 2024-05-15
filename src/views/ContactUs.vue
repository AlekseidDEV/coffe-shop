<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <Header></Header>
          </div>
        </div>
        <h1 class="title-big">Contact us</h1>
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">

            <form @submit.prevent="submit" action="#" class="mt-5" ref="forms">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input type="text" class="form-control" id="name-input" v-model="v$.name.$model">
                  <span
                      style="color: red;"
                      v-for="error in v$.name.$errors"
                      :key="error.$uid"
                  >{{error.$message}}</span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                      type="email"
                      class="form-control"
                      id="email-input"
                      v-model="v$.email.$model">
                  <span
                      style="color: red;"
                      v-for="error in v$.email.$errors"
                      :key="error.$uid"
                  >{{error.$message}}</span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-center">
                  <label for="phone-input" class="mb-0">
                    Phone
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input type="tel" class="form-control" id="phone-input" v-model="v$.phone.$model">
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-center">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12">
                                    <textarea class="form-control" name="message" id="message" rows="5"
                                              placeholder="Leave your comments here" v-model="v$.message.$model"></textarea>
                  <span
                      style="color: red;"
                      v-for="error in v$.message.$errors"
                      :key="error.$uid"
                  >{{error.$message}}</span>

                  <div class="wrapper_checked">
                    <input type="checkbox" value="vue" name="checked" v-model="v$.checked.$model">
                    <span ref="textCheck">I agree with the offer agreement</span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import { useVuelidate } from '@vuelidate/core'
import {required, email, maxLength, sameAs} from '@vuelidate/validators'
import { helpers } from '@vuelidate/validators'
import {minLenght} from "@/validators/minlenght";
import {axiosJson} from "@/axiosClient";

export default {
  components: {Header},

  setup(){
    return {v$: useVuelidate()}
  },

    data(){
    return{
      name: '',
      email: '',
      phone: '',
      message: '',
      checked: ''
    }
  },
    validations () {
      return {
        name: {required},
        email: {required, email},
        phone: {},
        message: {
          required,
          maxLength: maxLength(20),
          minLenght: helpers.withMessage('this, value min 5', minLenght)
        },
        checked: {sameAs: sameAs(true)}
      }
    },

      methods:{
      async submit(){
        const isFormCorrect = await this.v$.$validate()

        if (!isFormCorrect){
          this.$toast.warning("Заполните поля !")
        } else {
          axiosJson.post('/posts', {
            headers: {"Content-Type": "application/json;charset=utf-8",},
            data: JSON.stringify({
              name: this.name,
              phone: this.phone,
              email: this.email,
              message: this.message,
            })
          }).then(() => {
            this.$toast.success('Данные успешно отправлены')
            this.$refs.forms.reset()
          }).catch(() => {
            this.$toast.error('Ошибка отправки формы')
          })
        }
      }
    },
}



</script>

<style>
.wrapper_checked{
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.error{
  text-decoration: underline;
  color: red
}
</style>