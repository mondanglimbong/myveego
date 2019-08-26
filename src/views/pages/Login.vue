<template>
  <div class="app flex-row align-items-center" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
    <div class="container" >
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <img style="height: 100%; width: 100%" src="../../assets/img/fleego2.png">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control"  v-model="username" placeholder="Username" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control"  v-model="password" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary"  v-on:click="login()" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
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
    import image from '@/assets/img/wallpaper.png';
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                token: '',
                output: '',
                username:'',
                password :'',
                image
            };
        },
        computed: {
            count() {
                return store.auth.token;
            },
            liStyle(){
                return "background-image : url('" + require('@/assets/img/wallpaper.png') + "')";
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
                            self.$router.push('./dashboard')

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
