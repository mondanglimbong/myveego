<template>
  <v-card>
    <v-card-title>
      User
      <div class="flex-grow-1"></div>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      :hover="hover"
      :striped="striped"
      :bordered="bordered"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <div class="flex-grow-1"></div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="success" dark class="mb-2" v-on="on">Add User</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.id" label="No"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.usertype" label="User Type"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.phonenumber" label="Phone Number"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.expireddate" label="Expired Date"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          edit
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
    export default {
        data () {
            return {
                dialog: false,
                search: '',
                headers: [
                    {
                        text: 'No',
                        align: 'left',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Username', value: 'username' },
                    { text: 'Email', value: 'email' },
                    { text: 'User Type', value: 'usertype' },
                    { text: 'Phone Number', value: 'phonenumber' },
                    { text: 'Expired Date', value: 'expireddate', sortable: false },
                    { text: 'Menu', value:'action', sortable:true}
                ],
                editedIndex: -1,
                editedItem: {
                    id: '',
                    username: 0,
                    email: 0,
                    usertype: 0,
                    phonenumber: 0,
                    expireddate:'0'
                },
                defaultItem: {
                    id: '',
                    username: '',
                    email: '',
                    usertype: '',
                    phonenumber: '',
                    expireddate:''
                },
                desserts: [],
            }
        },
        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'Create New User' : 'Edit User'
            },
        },

        watch: {
            dialog (val) {
                val || this.close()
            },
        },

        created () {
            this.initialize()
        },

        methods: {
            initialize () {
                this.desserts = [
                    {
                        id: '1',
                        username: 'wddw',
                        email: 'edewdw',
                        usertype: 'dedewf',
                        phonenumber: 'wdewdwedf',
                        expireddate:'0eewdfw'
                    },
                    {
                        id: '1',
                        username: 'wddw',
                        email: 'edewdw',
                        usertype: 'dedewf',
                        phonenumber: 'wdewdwedf',
                        expireddate:'0eewdfw'
                    },
                    {
                        id: '1',
                        username: 'wddw',
                        email: 'edewdw',
                        usertype: 'dedewf',
                        phonenumber: 'wdewdwedf',
                        expireddate:'0eewdfw'
                    },
                    {
                        id: '1',
                        username: 'wddw',
                        email: 'edewdw',
                        usertype: 'dedewf',
                        phonenumber: 'wdewdwedf',
                        expireddate:'0eewdfw'
                    },
                    {
                        id: '1',
                        username: 'wddw',
                        email: 'edewdw',
                        usertype: 'dedewf',
                        phonenumber: 'wdewdwedf',
                        expireddate:'0eewdfw'
                    },
                    {
                        id: '1',
                        username: 'wddw',
                        email: 'edewdw',
                        usertype: 'dedewf',
                        phonenumber: 'wdewdwedf',
                        expireddate:'0eewdfw'
                    },

                ]
            },

            editItem (item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
                this.dialog = true
            },

            close () {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            },
        },
    }
</script>

<!--<template>-->
<!--  <b-card>-->
<!--<b-card-body>-->
<!--  <div class="ml-auto text-left">-->
<!--    <b-button variant="success" @click="showModal">Add</b-button>-->
<!--    <b-modal ref="modal-1" hide-footer title="Delete Vehicle">-->
<!--      <hr>-->
<!--      <p class="my-4">Do you really want to delete this vehicle? </p>-->
<!--      <p class="my-4"> Click Confirm to delete</p>-->
<!--      <div class="row">-->
<!--        <div class="col">-->
<!--          <b-button variant="danger" block @click="hideModal">Cancel</b-button>-->
<!--        </div>-->
<!--        <div class="col">-->
<!--          <b-button @click="del(user)" variant="primary" block>Confirm</b-button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </b-modal>-->
<!--    <b-modal ref="my-modal" hide-footer title="Create New User">-->
<!--      <b-form>-->
<!--        <b-form-group-->
<!--          description="Let us know your full name."-->
<!--          label="Enter your name"-->
<!--          label-for="basicName"-->
<!--          :label-cols="3"-->
<!--        >-->
<!--          <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>-->
<!--        </b-form-group>-->
<!--      </b-form>-->
<!--    </b-modal>-->
<!--  </div>-->
<!--        <mdb-datatable-->
<!--          :data="data"-->
<!--          striped-->
<!--          bordered-->
<!--        />-->
<!--      <b-modal ref="my-modal" hide-footer title="Create New User">-->
<!--        <div class="d-block text-center">-->
<!--          <form @submit.prevent="add">-->
<!--&lt;!&ndash;            <b-container fluid>&ndash;&gt;-->
<!--&lt;!&ndash;              <input type="hidden" v-model="form.id">&ndash;&gt;-->
<!--&lt;!&ndash;              <b-form>&ndash;&gt;-->
<!--&lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--&lt;!&ndash;                  label="Username"&ndash;&gt;-->
<!--&lt;!&ndash;                  label-for="username"&ndash;&gt;-->
<!--&lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-form-input id="username" type="text" placeholder="Enter Username.." autocomplete="username" v-model="form.username"></b-form-input>&ndash;&gt;-->
<!--&lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--&lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--&lt;!&ndash;                  label="Email"&ndash;&gt;-->
<!--&lt;!&ndash;                  label-for="email"&ndash;&gt;-->
<!--&lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-form-input id="email" type="email" placeholder="Enter Email.." autocomplete="email" v-model="form.email"></b-form-input>&ndash;&gt;-->
<!--&lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--&lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--&lt;!&ndash;                  label="Password"&ndash;&gt;-->
<!--&lt;!&ndash;                  label-for="password"&ndash;&gt;-->
<!--&lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-form-input id="passsword" type="password" placeholder="Enter Password.." autocomplete="current-password" v-model="form.password"></b-form-input>&ndash;&gt;-->
<!--&lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--&lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--&lt;!&ndash;                  label="Password Confirm"&ndash;&gt;-->
<!--&lt;!&ndash;                  label-for="password_confirm"&ndash;&gt;-->
<!--&lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-form-input id="password_confirm" type="password" placeholder="Enter Password.." autocomplete="current-password" v-model="form.password_confirm"></b-form-input>&ndash;&gt;-->
<!--&lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--&lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--&lt;!&ndash;                  label="User Level"&ndash;&gt;-->
<!--&lt;!&ndash;                  label-for="user_level"&ndash;&gt;-->
<!--&lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-form-input id="user_level" type="text" v-model="form.user_level"></b-form-input>&ndash;&gt;-->
<!--&lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--&lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--&lt;!&ndash;                  label="Phone Number"&ndash;&gt;-->
<!--&lt;!&ndash;                  label-for="phone_number"&ndash;&gt;-->
<!--&lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-form-input id="phone_number" type="text" placeholder="Enter Phone Number.." v-model="form.phone_number"></b-form-input>&ndash;&gt;-->
<!--&lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--&lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--&lt;!&ndash;                  label="Company Name"&ndash;&gt;-->
<!--&lt;!&ndash;                  label-for="company_name"&ndash;&gt;-->
<!--&lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-form-input id="company_name" type="text" placeholder="Enter Companny Name.." v-model="form.company_name"></b-form-input>&ndash;&gt;-->
<!--&lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--&lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--&lt;!&ndash;                  label="Company Address"&ndash;&gt;-->
<!--&lt;!&ndash;                  label-for="company_address"&ndash;&gt;-->
<!--&lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-form-input id="company_address" type="text" placeholder="Enter Companny Address.." v-model="form.company_address"></b-form-input>&ndash;&gt;-->
<!--&lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--&lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--&lt;!&ndash;                  label="Expired Date" label-for="date"&ndash;&gt;-->
<!--&lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-form-input type="date" id="date"></b-form-input>&ndash;&gt;-->
<!--&lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--&lt;!&ndash;                <div slot="footer">&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>&ndash;&gt;-->
<!--&lt;!&ndash;                  <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </b-form>&ndash;&gt;-->
<!--&lt;!&ndash;            </b-container>&ndash;&gt;-->
<!--            <b-container fluid>-->
<!--              <b-form>-->
<!--                <b-form-group-->
<!--                  label="Username"-->
<!--                  label-for="username"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="username" type="text" placeholder="Enter Username.." autocomplete="username"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Email"-->
<!--                  label-for="email"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="email" type="email" placeholder="Enter Email.." autocomplete="email"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Password"-->
<!--                  label-for="password"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="passsword" type="password" placeholder="Enter Password.." autocomplete="current-password"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Password Confirm"-->
<!--                  label-for="password_confirm"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="password_confirm" type="password" placeholder="Enter Password.." autocomplete="current-password"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="User Level"-->
<!--                  label-for="user_level"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-select v-model="selected" :options="options"></b-form-select>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Phone Number"-->
<!--                  label-for="phone_number"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="phone_number" type="text" placeholder="Enter Phone Number.."></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Company Name"-->
<!--                  label-for="company_name"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="company_name" type="text" placeholder="Enter Companny Name.."></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Company Address"-->
<!--                  label-for="company_address"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="company_address" type="text" placeholder="Enter Companny Address.."></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Expired Date" label-for="date"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input type="date" id="date"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <div slot="footer">-->
<!--                  <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>-->
<!--                  <b-button type="reset" variant="danger" size="sm" @click="hideModal">Close</b-button>-->
<!--                </div>-->
<!--              </b-form>-->
<!--            </b-container>-->
<!--          </form>-->
<!--        </div>-->
<!--      </b-modal>-->
<!--</b-card-body>-->
<!--  </b-card>-->
<!--</template>-->
<!--<script>-->
<!--    import axios from 'axios'-->
<!--    import { mdbDatatable } from 'mdbvue';-->
<!--    export default {-->
<!--        name: 'DatatablePage',-->
<!--        components: {-->
<!--            mdbDatatable-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                selected: null,-->
<!--                options: [-->
<!--                    { value: null, text: 'Choose a Level' },-->
<!--                    { value: 'a', text: 'Customer' },-->
<!--                    { value: 'b', text: 'Member' }-->
<!--                ],-->
<!--                data: {-->
<!--                    columns: [-->
<!--                        {-->
<!--                            label: 'No',-->
<!--                            field: 'id',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Username',-->
<!--                            field: 'username',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Email',-->
<!--                            field: 'email',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'User Type',-->
<!--                            field: 'usertype',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Phone Number',-->
<!--                            field: 'phonenumber',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Expired Date',-->
<!--                            field: 'expireddate',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Menu',-->
<!--                            field: 'menu',-->
<!--                            sort: 'asc'-->
<!--                        }-->
<!--                    ],-->
<!--                    rows: [-->
<!--                        {-->
<!--                            id: '1',-->
<!--                            username: 'mondanglimbong',-->
<!--                            email :'rumondangaslimbong@gmail.com',-->
<!--                            usertype: 'Operator',-->
<!--                            phonenumber: '0987654567',-->
<!--                            expireddate: '2020-12-31',-->
<!--                            menu:''-->
<!--                        },-->
<!--                        {-->
<!--                            id: '2',-->
<!--                            username: 'mondanglimbong',-->
<!--                            email :'rumondangaslimbong@gmail.com',-->
<!--                            usertype: 'Operator',-->
<!--                            phonenumber: '0987654567',-->
<!--                            expireddate: '2020-12-31',-->
<!--                            menu:''-->
<!--                        },-->
<!--                        {-->
<!--                            id: '3',-->
<!--                            username: 'mondanglimbong',-->
<!--                            email :'rumondangaslimbong@gmail.com',-->
<!--                            usertype: 'Operator',-->
<!--                            phonenumber: '0987654567',-->
<!--                            expireddate: '2020-12-31',-->
<!--                            menu:''-->
<!--                        },-->
<!--                        {-->
<!--                            id: '3',-->
<!--                            username: 'mondanglimbong',-->
<!--                            email :'rumondangaslimbong@gmail.com',-->
<!--                            usertype: 'Operator',-->
<!--                            phonenumber: '0987654567',-->
<!--                            expireddate: '2020-12-31',-->
<!--                            menu:''-->
<!--                        },-->
<!--                        {-->
<!--                            id: '3',-->
<!--                            username: 'mondanglimbong',-->
<!--                            email :'rumondangaslimbong@gmail.com',-->
<!--                            usertype: 'Operator',-->
<!--                            phonenumber: '0987654567',-->
<!--                            expireddate: '2020-12-31',-->
<!--                            menu:''-->
<!--                        },-->

<!--                    ]-->
<!--                }-->
<!--            }-->
<!--        },-->
<!--        // mounted() {-->
<!--        //     this.load()-->
<!--        // },-->
<!--        methods: {-->
<!--            showModal() {-->
<!--                this.$refs['my-modal'].show()-->
<!--            },-->
<!--            showModal1() {-->
<!--                this.$refs['modal-1'].show()-->
<!--            },-->
<!--            hideModal() {-->
<!--                this.$refs['my-modal'].hide()-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
