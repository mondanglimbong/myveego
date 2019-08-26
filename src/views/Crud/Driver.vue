<template>
  <div>
    <div class="products">
      <div class="ml-auto text-left">
        <div>
          <b-button id="show-btn" variant="success" @click="showModal">Add</b-button>
          <b-modal ref="modal-1" hide-footer title="Delete Vehicle">
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
          <b-modal ref="my-modal" hide-footer title="Edit Driver">
            <div class="d-block text-center">

              <form @submit.prevent="add">

                <b-container fluid>
                  <input type="hidden" v-model="form.id">
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label>Driver Name:</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input id="input-small" size="sm" type="text" v-model="form.drivername" placeholder="Drivername.."></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label>Viewer List: </label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input id="input-small" size="sm" type="text" v-model="form.viewerlist" placeholder="Viewer List.."></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label>Driver Address:</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input id="input-small" size="sm" type="text"
                                    v-model="form.driveraddress" placeholder="Driver Address.."></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label>Phone No. :</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input id="input-small" size="sm" type="text" v-model="form.phonenum" placeholder="Phone Number.."></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label>Lisence No.:</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input id="input-small" size="sm" type="text" v-model="form.lisencenum" placeholder="Lisence Number.. "></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label>Lisence Expired</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input id="input-small" size="sm" type="text"
                                    v-model="form.lisenceexpired" placeholder="Lisence Expipred.. "></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label>National ID No.</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input id="input-small" size="sm" type="text"
                                    v-model="form.nationalidnum" placeholder="National ID Number.."></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="4">
                      <label>Driver Expired Date:</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form-input id="input-small" size="sm" type="date"
                                    v-model="form.driverexpireddate " >

                      </b-form-input>
                    </b-col>
                    <b-col sm="4">
                      <label>Driver Photo:</label>
                    </b-col>
                    <b-col sm="8">
                      <b-form class="md-form" action="#">
                        <div class="form-group">
                          <input type="file" @change="onFileChanged">
                          <button @click="onUpload">Upload!</button>
                        </div>
                      </b-form>
                    </b-col>
                  </b-row>
                </b-container>
                <div class="row">
                  <div class="col">
                    <b-button variant="danger" block @click="hideModal">Cancel</b-button>
                  </div>
                  <div class="col">
                    <b-button variant="success" block type="submit" v-show="!updateSubmit">Save</b-button>
                  </div>
                  <div class="col">
                    <b-button variant="success" type="button" v-show="updateSubmit" block @click="update(form)">
                      Update
                    </b-button>
                  </div>
                </div>
              </form>
            </div>
          </b-modal>
        </div>
      </div>
      <div class="table-responsive" >
        <base-table class="table align-items-center table-flush"
                    :class="type === 'dark' ? 'table-dark': ''"
                    :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                    tbody-classes="list"
                    :data="users">
          <template slot="columns">
            <th>No.</th>
            <th>Image</th>
            <th>Driver Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Lisence Number</th>
            <th>Lisence Expired</th>
            <th>National ID Number</th>
            <th>Driver Expired Date</th>
            <th>Menu</th>
          </template>

          <template slot-scope="{row}">
            <td class="id">
              {{row.id}}
            </td>
            <td class="driverphoto">
              {{row.driverphoto}}
            </td>
            <td class="drivername">
              {{row.drivername}}
            </td>
            <td class="driveraddress">
              {{row.driveraddress}}
            </td>
            <td class="phonenum">
              {{row.phonenum}}
            </td>
            <td class="lisencenum">
              {{row.lisencenum}}
            </td>
            <td class="lisenceexpired">
              {{row.lisenceexpired}}
            </td>
            <td class="nationalidnum">
              {{row.nationalidnum}}
            </td>
            <td class="driverrxpireddate">
              {{row.driverexpireddate}}
            </td>
            <td>
              <b-button id="show-btn2" @click="edit(user)">Edit</b-button>
              <b-button id="show-btn1" @click="showModal1">Delete</b-button>
            </td>
          </template>
        </base-table>
      </div>
    </div>
  </div>
</template>

<script>
    /* eslint-disable */
    import BaseTable from "./BaseTable.vue";
    import axios from 'axios'

    export default {
        data() {
            return {
                form: {
                    id: '',
                    drivername: '',
                    viewerlist: '',
                    driveraddress: '',
                    phonenum: '',
                    lisencenum: '',
                    lisenceexpired: '',
                    nationalidnum: '',
                    driverexpireddate: '',
                    driverphoto: ''
                },
                rows: [{
                    id: '1',
                    driverphoto: '122',
                    drivername: 'Rumondang',
                    driveraddress: 'Jalan Pandu',
                    phonenum: '082277458462',
                    lisencenum: '1112223344',
                    lisenceexpired: '12132324',
                    nationalidnum: '23232323',
                    driverexpireddate: '389230'
                }],
                updateSubmit: false
            }
        },
        components: {
            BaseTable
        },
        mounted() {
            this.load()
        },
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            },
            showModal1() {
                this.$refs['modal-1'].show()
            },
            hideModal() {
                this.$refs['my-modal'].hide()
            },
            onFileChanged(event) {
                const file = event.target.files[0]
            },
            onUpload() {
                axios.post('http://localhost:3000/users', this.selectedFile)
            },
            uploadHandler() {
                axios.post('http://localhost:3000/users', formData, {
                    onUploadProgress: progressEvent => {
                        console.log(progressEvent.loaded / progressEvent.total)
                    }
                })
            },
            load() {
                axios.get('http://localhost:3000/users').then(res => {
                    this.users = res.data
                }).catch((err) => {
                    console.log(err);

                })
            },
            add() {
                axios.post('http://localhost:3000/users/', this.form).then(res => {
                    this.load()
                    this.form.id = ''
                    this.form.viewerlist = ''
                    this.form.drivername = ''
                    this.form.driveraddress = ''
                    this.form.phonenum = ''
                    this.form.lisencenum = ''
                    this.form.lisenceexpired = ''
                    this.form.nationalidnum = ''
                    this.form.driverexpireddate = ''
                    this.form.driverphoto = ''
                })
            },
            edit(row) {
                this.$refs['my-modal'].show()
                this.updateSubmit = true
                this.form.id = row.id
                this.form.drivername = row.drivername
                this.form.viewerlist = row.viewerlist
                this.form.driveraddress = row.driveraddress
                this.form.phonenum = row.phonenum
                this.form.lisencenum = row.lisencenumber
                this.form.lisenceexpired = row.lisenceexpired
                this.form.nationalidnum = row.nationalidnum
                this.form.driverexpireddate = row.driverexpired
                this.form.driverphoto = row.driverphoto
            },
            update(form) {
                return axios.put('http://localhost:3000/users/' + form.id, {
                    drivername: this.form.drivername,
                    driveraddress: this.form.driveraddress,
                    phonenum: this.form.phonenum,
                    lisenceexpired: this.form.lisenceexpired,
                    nationalidnum: this.form.nationalidnum,
                    driverexpireddate: this.form.driverexpireddate,
                    driverphoto: this.form.driverphoto
                }).then(res => {
                    this.load()
                    this.form.id = ''
                    this.form.drivername = ''
                    this.form.driveraddress = ''
                    this.form.phonenum = ''
                    this.form.lisencenum = ''
                    this.form.lisenceexpired = ''
                    this.form.nationalidnum = ''
                    this.form.driverexpireddate = ''
                    this.form.driverphoto = ''
                    this.updateSubmit = false
                }).catch((err) => {
                    console.log(err);

                })
            },
            del(user) {
                axios.delete('http://localhost:3000/users/' + user.id).then(res => {
                    this.load()
                    let index = this.users.indexOf(form.name)
                    this.users.splice(index, 1)
                })
            }
        }
    }
</script>
<!--<template>-->
<!--  <b-card>-->
<!--    <b-card-body>-->
<!--      <div class="ml-auto text-left">-->
<!--        <b-button variant="success" @click="showModal">Add</b-button>-->
<!--        <b-modal ref="modal-1" hide-footer title="Delete Vehicle">-->
<!--          <hr>-->
<!--          <p class="my-4">Do you really want to delete this vehicle? </p>-->
<!--          <p class="my-4"> Click Confirm to delete</p>-->
<!--          <div class="row">-->
<!--            <div class="col">-->
<!--              <b-button variant="danger" block @click="hideModal">Cancel</b-button>-->
<!--            </div>-->
<!--            <div class="col">-->
<!--              <b-button @click="del(user)" variant="primary" block>Confirm</b-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </b-modal>-->
<!--        <b-modal ref="my-modal" hide-footer title="Create New User">-->
<!--          <b-form>-->
<!--            <b-form-group-->
<!--              description="Let us know your full name."-->
<!--              label="Enter your name"-->
<!--              label-for="basicName"-->
<!--              :label-cols="3"-->
<!--            >-->
<!--              <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>-->
<!--            </b-form-group>-->
<!--          </b-form>-->
<!--        </b-modal>-->
<!--      </div>-->
<!--      <mdb-datatable-->
<!--        :data="data"-->
<!--        striped-->
<!--        bordered-->
<!--      />-->
<!--      <b-modal ref="my-modal" size="md" hide-footer title="Create New Driver">-->
<!--        <div class="d-block text-center">-->
<!--          <form @submit.prevent="add">-->
<!--            &lt;!&ndash;            <b-container fluid>&ndash;&gt;-->
<!--            &lt;!&ndash;              <input type="hidden" v-model="form.id">&ndash;&gt;-->
<!--            &lt;!&ndash;              <b-form>&ndash;&gt;-->
<!--            &lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--            &lt;!&ndash;                  label="Username"&ndash;&gt;-->
<!--            &lt;!&ndash;                  label-for="username"&ndash;&gt;-->
<!--            &lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--            &lt;!&ndash;                >&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-form-input id="username" type="text" placeholder="Enter Username.." autocomplete="username" v-model="form.username"></b-form-input>&ndash;&gt;-->
<!--            &lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--            &lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--            &lt;!&ndash;                  label="Email"&ndash;&gt;-->
<!--            &lt;!&ndash;                  label-for="email"&ndash;&gt;-->
<!--            &lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--            &lt;!&ndash;                >&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-form-input id="email" type="email" placeholder="Enter Email.." autocomplete="email" v-model="form.email"></b-form-input>&ndash;&gt;-->
<!--            &lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--            &lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--            &lt;!&ndash;                  label="Password"&ndash;&gt;-->
<!--            &lt;!&ndash;                  label-for="password"&ndash;&gt;-->
<!--            &lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--            &lt;!&ndash;                >&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-form-input id="passsword" type="password" placeholder="Enter Password.." autocomplete="current-password" v-model="form.password"></b-form-input>&ndash;&gt;-->
<!--            &lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--            &lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--            &lt;!&ndash;                  label="Password Confirm"&ndash;&gt;-->
<!--            &lt;!&ndash;                  label-for="password_confirm"&ndash;&gt;-->
<!--            &lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--            &lt;!&ndash;                >&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-form-input id="password_confirm" type="password" placeholder="Enter Password.." autocomplete="current-password" v-model="form.password_confirm"></b-form-input>&ndash;&gt;-->
<!--            &lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--            &lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--            &lt;!&ndash;                  label="User Level"&ndash;&gt;-->
<!--            &lt;!&ndash;                  label-for="user_level"&ndash;&gt;-->
<!--            &lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--            &lt;!&ndash;                >&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-form-input id="user_level" type="text" v-model="form.user_level"></b-form-input>&ndash;&gt;-->
<!--            &lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--            &lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--            &lt;!&ndash;                  label="Phone Number"&ndash;&gt;-->
<!--            &lt;!&ndash;                  label-for="phone_number"&ndash;&gt;-->
<!--            &lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--            &lt;!&ndash;                >&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-form-input id="phone_number" type="text" placeholder="Enter Phone Number.." v-model="form.phone_number"></b-form-input>&ndash;&gt;-->
<!--            &lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--            &lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--            &lt;!&ndash;                  label="Company Name"&ndash;&gt;-->
<!--            &lt;!&ndash;                  label-for="company_name"&ndash;&gt;-->
<!--            &lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--            &lt;!&ndash;                >&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-form-input id="company_name" type="text" placeholder="Enter Companny Name.." v-model="form.company_name"></b-form-input>&ndash;&gt;-->
<!--            &lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--            &lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--            &lt;!&ndash;                  label="Company Address"&ndash;&gt;-->
<!--            &lt;!&ndash;                  label-for="company_address"&ndash;&gt;-->
<!--            &lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--            &lt;!&ndash;                >&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-form-input id="company_address" type="text" placeholder="Enter Companny Address.." v-model="form.company_address"></b-form-input>&ndash;&gt;-->
<!--            &lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--            &lt;!&ndash;                <b-form-group&ndash;&gt;-->
<!--            &lt;!&ndash;                  label="Expired Date" label-for="date"&ndash;&gt;-->
<!--            &lt;!&ndash;                  :label-cols="3"&ndash;&gt;-->
<!--            &lt;!&ndash;                >&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-form-input type="date" id="date"></b-form-input>&ndash;&gt;-->
<!--            &lt;!&ndash;                </b-form-group>&ndash;&gt;-->
<!--            &lt;!&ndash;                <div slot="footer">&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>&ndash;&gt;-->
<!--            &lt;!&ndash;                  <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>&ndash;&gt;-->
<!--            &lt;!&ndash;                </div>&ndash;&gt;-->
<!--            &lt;!&ndash;              </b-form>&ndash;&gt;-->
<!--            &lt;!&ndash;            </b-container>&ndash;&gt;-->
<!--            <b-container fluid>-->
<!--              <b-form>-->
<!--                <b-form-group-->
<!--                  label="Driver Name"-->
<!--                  label-for="driver_name"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="drivername" type="text" placeholder="Driver Name"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Viewer List"-->
<!--                  label-for="viewer_list"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="viewer_list" type="text" placeholder="Viewer List"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Driver Address"-->
<!--                  label-for="driver_address"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="driver_address" type="text" placeholder="Driver Address"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Phone No."-->
<!--                  label-for="phone"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="phone" type="text" placeholder="Driver Phone"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Lisence No."-->
<!--                  label-for="lisence"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="lisence" type="text" placeholder="Driver Lisence"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Lisence Expired"-->
<!--                  label-for="lisence_expired"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="lisence_expired" type="text" placeholder="Lisence Expired"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="National ID No."-->
<!--                  label-for="national_id"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input id="national_id" type="text" placeholder="National ID No. "></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Driver Expired Date" label-for="date"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-input type="date" id="date"></b-form-input>-->
<!--                </b-form-group>-->
<!--                <b-form-group-->
<!--                  label="Driver Photo" label-for="driver_photo"-->
<!--                  :label-cols="3"-->
<!--                >-->
<!--                  <b-form-file id="fileInput" :plain="true" variant="primary"></b-form-file>-->
<!--                </b-form-group>-->
<!--                <div slot="footer">-->
<!--                  <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit-->
<!--                  </b-button>-->
<!--                  <b-button type="reset" variant="danger" size="sm" @click="hideModal">Close</b-button>-->
<!--                </div>-->
<!--              </b-form>-->
<!--            </b-container>-->
<!--          </form>-->
<!--        </div>-->
<!--      </b-modal>-->
<!--    </b-card-body>-->
<!--  </b-card>-->
<!--</template>-->
<!--<script>-->
<!--    import axios from 'axios'-->
<!--    import {mdbDatatable} from 'mdbvue';-->

<!--    export default {-->
<!--        name: 'DatatablePage',-->
<!--        components: {-->
<!--            mdbDatatable-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                data: {-->
<!--                    columns: [-->
<!--                        {-->
<!--                            label: 'No',-->
<!--                            field: 'id',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Image',-->
<!--                            field: 'image',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Vehicle Name',-->
<!--                            field: 'vehicle_name',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Plat No.',-->
<!--                            field: 'plat',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Imei No.',-->
<!--                            field: 'imei',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Chassis Number',-->
<!--                            field: 'chassis_number',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Machine Number',-->
<!--                            field: 'machine_number',-->
<!--                            sort: 'asc'-->
<!--                        },-->
<!--                        {-->
<!--                            label: 'Vehicle Status',-->
<!--                            field: 'vehicle_status',-->
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
<!--                            image: 'Image2',-->
<!--                            vehicle_name: 'Mondang',-->
<!--                            plat: 'Jalan Teladan no. 17',-->
<!--                            imei: '098765467',-->
<!--                            chassis_number: '098765',-->
<!--                            machine_number: '67890-09',-->
<!--                            vehicle_status: '2020-08-11',-->
<!--                            menu: ''-->
<!--                        },-->
<!--                        {-->
<!--                            id: '2',-->
<!--                            image: 'Image2',-->
<!--                            vehicle_name: 'Mondang',-->
<!--                            plat: 'Jalan Teladan no. 17',-->
<!--                            imei: '098765467',-->
<!--                            chassis_number: '098765',-->
<!--                            machine_number: '67890-09',-->
<!--                            vehicle_status: '2020-08-11',-->
<!--                            menu: ''-->
<!--                        },-->
<!--                        {-->
<!--                            id: '3',-->
<!--                            image: 'Image2',-->
<!--                            vehicle_name: 'Mondang',-->
<!--                            plat: 'Jalan Teladan no. 17',-->
<!--                            imei: '098765467',-->
<!--                            chassis_number: '098765',-->
<!--                            machine_number: '67890-09',-->
<!--                            vehicle_status: '2020-08-11',-->
<!--                            menu: ''-->
<!--                        },-->
<!--                        {-->
<!--                            id: '4',-->
<!--                            image: 'Image2',-->
<!--                            vehicle_name: 'Mondang',-->
<!--                            plat: 'Jalan Teladan no. 17',-->
<!--                            imei: '098765467',-->
<!--                            chassis_number: '098765',-->
<!--                            machine_number: '67890-09',-->
<!--                            vehicle_status: '2020-08-11',-->
<!--                            menu: ''-->
<!--                        },-->
<!--                        {-->
<!--                            id: '5',-->
<!--                            image: 'Image2',-->
<!--                            vehicle_name: 'Mondang',-->
<!--                            plat: 'Jalan Teladan no. 17',-->
<!--                            imei: '098765467',-->
<!--                            chassis_number: '098765',-->
<!--                            machine_number: '67890-09',-->
<!--                            vehicle_status: '2020-08-11',-->
<!--                            menu: ''-->
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
