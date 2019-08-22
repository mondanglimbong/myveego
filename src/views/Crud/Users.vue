<template>
  <b-card>
<b-card-body>
  <div class="ml-auto text-left">
    <b-button variant="success" @click="showModal">Add</b-button>
    <b-modal ref="modal-1" hide-footer title="Delete Vehicle">
      <hr>
      <p class="my-4">Do you really want to delete this vehicle? </p>
      <p class="my-4"> Click Confirm to delete</p>
      <div class="row">
        <div class="col">
          <b-button variant="danger" block @click="hideModal">Cancel</b-button>
        </div>
        <div class="col">
          <b-button @click="del(user)" variant="primary" block>Confirm</b-button>
        </div>
      </div>
    </b-modal>
    <b-modal ref="my-modal" hide-footer title="Create New User">
      <b-form>
        <b-form-group
          description="Let us know your full name."
          label="Enter your name"
          label-for="basicName"
          :label-cols="3"
        >
          <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
        <mdb-datatable
          :data="data"
          striped
          bordered
        />
      <b-modal ref="my-modal" hide-footer title="Create New User">
        <div class="d-block text-center">
          <form @submit.prevent="add">
<!--            <b-container fluid>-->
<!--              <input type="hidden" v-model="form.id">-->
<!--              <b-form>-->
<!--                <b-form-group-->
<!--                  label="Username"-->
<!--                  label-for="username"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="username" type="text" placeholder="Enter Username.." autocomplete="username" v-model="form.username"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Email"-->
<!--                  label-for="email"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="email" type="email" placeholder="Enter Email.." autocomplete="email" v-model="form.email"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Password"-->
<!--                  label-for="password"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="passsword" type="password" placeholder="Enter Password.." autocomplete="current-password" v-model="form.password"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Password Confirm"-->
<!--                  label-for="password_confirm"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="password_confirm" type="password" placeholder="Enter Password.." autocomplete="current-password" v-model="form.password_confirm"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="User Level"-->
<!--                  label-for="user_level"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="user_level" type="text" v-model="form.user_level"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Phone Number"-->
<!--                  label-for="phone_number"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="phone_number" type="text" placeholder="Enter Phone Number.." v-model="form.phone_number"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Company Name"-->
<!--                  label-for="company_name"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="company_name" type="text" placeholder="Enter Companny Name.." v-model="form.company_name"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Company Address"-->
<!--                  label-for="company_address"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="company_address" type="text" placeholder="Enter Companny Address.." v-model="form.company_address"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Expired Date" label-for="date"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input type="date" id="date"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <div slot="footer">-->
<!--                  <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>-->
<!--                  <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>-->
<!--                </div>-->
<!--              </b-form>-->
<!--            </b-container>-->
            <b-container fluid>
              <b-form>
                <b-form-group
                  label="Username"
                  label-for="username"
                  :label-cols="3"
                >
                  <b-form-input id="username" type="text" placeholder="Enter Username.." autocomplete="username"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Email"
                  label-for="email"
                  :label-cols="3"
                >
                  <b-form-input id="email" type="email" placeholder="Enter Email.." autocomplete="email"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Password"
                  label-for="password"
                  :label-cols="3"
                >
                  <b-form-input id="passsword" type="password" placeholder="Enter Password.." autocomplete="current-password"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Password Confirm"
                  label-for="password_confirm"
                  :label-cols="3"
                >
                  <b-form-input id="password_confirm" type="password" placeholder="Enter Password.." autocomplete="current-password"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="User Level"
                  label-for="user_level"
                  :label-cols="3"
                >
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                </b-form-group>
                <b-form-group
                  label="Phone Number"
                  label-for="phone_number"
                  :label-cols="3"
                >
                  <b-form-input id="phone_number" type="text" placeholder="Enter Phone Number.."></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Company Name"
                  label-for="company_name"
                  :label-cols="3"
                >
                  <b-form-input id="company_name" type="text" placeholder="Enter Companny Name.."></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Company Address"
                  label-for="company_address"
                  :label-cols="3"
                >
                  <b-form-input id="company_address" type="text" placeholder="Enter Companny Address.."></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Expired Date" label-for="date"
                  :label-cols="3"
                >
                  <b-form-input type="date" id="date"></b-form-input>
                </b-form-group>
                <div slot="footer">
                  <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                  <b-button type="reset" variant="danger" size="sm" @click="hideModal">Close</b-button>
                </div>
              </b-form>
            </b-container>
          </form>
        </div>
      </b-modal>
</b-card-body>
  </b-card>
</template>
<script>
    import axios from 'axios'
    import { mdbDatatable } from 'mdbvue';
    export default {
        name: 'DatatablePage',
        components: {
            mdbDatatable
        },
        data() {
            return {
                selected: null,
                options: [
                    { value: null, text: 'Choose a Level' },
                    { value: 'a', text: 'Customer' },
                    { value: 'b', text: 'Member' }
                ],
                data: {
                    columns: [
                        {
                            label: 'No',
                            field: 'id',
                            sort: 'asc'
                        },
                        {
                            label: 'Username',
                            field: 'username',
                            sort: 'asc'
                        },
                        {
                            label: 'Email',
                            field: 'email',
                            sort: 'asc'
                        },
                        {
                            label: 'User Type',
                            field: 'usertype',
                            sort: 'asc'
                        },
                        {
                            label: 'Phone Number',
                            field: 'phonenumber',
                            sort: 'asc'
                        },
                        {
                            label: 'Expired Date',
                            field: 'expireddate',
                            sort: 'asc'
                        },
                        {
                            label: 'Menu',
                            field: 'menu',
                            sort: 'asc'
                        }
                    ],
                    rows: [
                        {
                            id: '1',
                            username: 'mondanglimbong',
                            email :'rumondangaslimbong@gmail.com',
                            usertype: 'Operator',
                            phonenumber: '0987654567',
                            expireddate: '2020-12-31',
                            menu:''
                        },
                        {
                            id: '2',
                            username: 'mondanglimbong',
                            email :'rumondangaslimbong@gmail.com',
                            usertype: 'Operator',
                            phonenumber: '0987654567',
                            expireddate: '2020-12-31',
                            menu:''
                        },
                        {
                            id: '3',
                            username: 'mondanglimbong',
                            email :'rumondangaslimbong@gmail.com',
                            usertype: 'Operator',
                            phonenumber: '0987654567',
                            expireddate: '2020-12-31',
                            menu:''
                        },
                        {
                            id: '3',
                            username: 'mondanglimbong',
                            email :'rumondangaslimbong@gmail.com',
                            usertype: 'Operator',
                            phonenumber: '0987654567',
                            expireddate: '2020-12-31',
                            menu:''
                        },
                        {
                            id: '3',
                            username: 'mondanglimbong',
                            email :'rumondangaslimbong@gmail.com',
                            usertype: 'Operator',
                            phonenumber: '0987654567',
                            expireddate: '2020-12-31',
                            menu:''
                        },

                    ]
                }
            }
        },
        // mounted() {
        //     this.load()
        // },
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            },
            showModal1() {
                this.$refs['modal-1'].show()
            },
            hideModal() {
                this.$refs['my-modal'].hide()
            }
        }
    }
</script>
