<!--<template id="login-form">-->
<!--  &lt;!&ndash; <div class="circular" v-bind:style="{ backgroundImage: { url(image) }"></div> &ndash;&gt;-->
<!--  &lt;!&ndash; <div class="login"> &ndash;&gt;-->
<!--  <div class="login-wrapper">-->
<!--    <div class="login-left">-->
<!--    </div>-->
<!--    &lt;!&ndash; <img src="../assets/fleego2.png" class="img-responsive" alt="" /> &ndash;&gt;-->
<!--    <div>-->
<!--      <input type="text" name="username" v-model="username" placeholder="Username" />-->
<!--      <input type="password" name="password" v-model="password" placeholder="Password" />-->
<!--      <button type="button" v-on:click="login()" > Login </button>-->
<!--    </div>-->

<!--  </div>-->
<!--</template>-->

<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Username" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button variant="primary" class="active mt-3">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
    import localforage from 'localforage';

    export default {
        name: 'login',
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                token: '',
                output: '',
                username:'',
                password :''
            };
        },
        computed: {
            count() {
                return store.auth.token;
            }
        },
        methods: {
            login() {
                console.log(this.username)
                self = this;
                this.axios.post('http://13.67.44.2:9900/token', {
                    user : this.username,
                    password :this.password
                })
                    .then(function (response) {
                        let tes1 = JSON.stringify(response);
                        let tes2 = JSON.parse(tes1);
                        console.log(tes2);
                        if(tes2.data.token){
                            localforage.setItem('token', tes2.data.token)
                            // $store.auth.token = response.data.token;
                            console.log('masuk');
                            console.log(tes2.data.token);
                            self.$router.push('./homepage')

                        } else {
                            self.$router.push('./')
                        }



//                    if(response.status === 200 && 'token' in response.body){
                        // this.$session.start()
                        // this.$session.set('jwt', response.body.token)
                        // Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
                        // this.$router.push('./homepage')
                        // currentObj.output = response.data.token;
//                    }
                    })
            }}
    }
</script>
