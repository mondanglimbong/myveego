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
        <b-modal ref="my-modal" size="lg" hide-footer title="Create New User">
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
      <b-modal ref="my-modal" size="lg" hide-footer title="Create New Driver">
        <div class="d-block text-center">
          <form @submit.prevent="add">
            <b-container fluid>
              <div class="row">
                <b-col sm="6"><h5>General Information</h5></b-col>
                <b-col sm="6"><h5>Vehicle Information</h5></b-col>
              </div>
              <div class="row">
                <b-col sm="6">
                  <b-card>
                      <b-form>
                        <label>Vehicle Name</label>
                        <b-form-input type="text" id="vehicle_name " placeholder="Vehicle Name"></b-form-input>
                      </b-form>
                    <b-form>
                      <label>Viewer List</label>
                      <b-form-input type="text" id="viewer_list" placeholder="Viewer List"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Imei Number</label>
                      <b-form-input type="text" id="imei_number" placeholder="Imei Number"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Vehicle Category</label>
                      <b-form-select
                        :plain="true"
                        :options="['--Choose Vehicel Category--','Motor Cycle', 'CAR', 'Bus', 'Truck', 'Vessel']"
                        value="--Choose Vehicel Category--">
                      </b-form-select>
                    </b-form>
                    <b-form>
                      <label>Vehicle Model</label>
                      <b-form-input type="text" id="vehicle_model" placeholder="Vehicle Model"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Vehicle Model</label>
                      <b-form-input type="text" id="vehicle_model" placeholder="Vehicle Model"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Major Maintenance</label>
                      <b-form-input type="text" id="major_maintenance" placeholder="Major Maintenance"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Minor Maintenance</label>
                      <b-form-input type="text" id="minor_maintenance" placeholder="Minor Maintenance"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Meter Starting Point</label>
                      <b-form-input type="text"  placeholder="Meter Starting Point"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Fuel per Km</label>
                      <b-form-input type="text" placeholder="Fuel per Km"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Vehicle Photo</label>
                      <b-form-file variant="primary" class="form-control-file"></b-form-file>
                    </b-form>
                  </b-card>
                </b-col>
                <b-col sm="6">
                  <b-card>
                      <b-form>
                        <label>Police Number</label>
                        <b-form-input type="text" placeholder="Police Number"></b-form-input>
                      </b-form>
                    <b-form>
                      <label>BPKB Number</label>
                      <b-form-input type="text" placeholder="BPKB Number"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>STNK Number</label>
                      <b-form-input type="text" placeholder="STNK Number"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Machine Number</label>
                      <b-form-input type="text" placeholder="Machine Number"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Chassis Number</label>
                      <b-form-input type="text" placeholder="Chassis Number"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Fuel Type</label>
                      <b-form-select
                                     :plain="true"
                                     :options="['--Fuel Type--','BENSIN', 'SOLAR']"
                                     value="--Fuel Type--">
                      </b-form-select>
                    </b-form>
                    <b-form>
                      <label>Vehicle Color</label>
                      <b-form-select
                        :plain="true"
                        :options="['--Select Color--','BENSIN', 'SOLAR']"
                        value="--Select Color--">
                      </b-form-select>
                    </b-form>
                    <b-form>
                      <label>Year of Production</label>
                      <b-form-input type="text" placeholder="Year of Production"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Year of Registration</label>
                      <b-form-input type="text" placeholder="Year of Registration"></b-form-input>
                    </b-form>
                    <b-form>
                      <label>Expired Date</label>
                      <b-form-input type="date" placeholder="Expired Date"></b-form-input>
                    </b-form>
                  </b-card>
                </b-col>
              </div>
              <div slot="footer">
                <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                <b-button type="reset" variant="danger" size="sm" @click="hideModal">Close</b-button>
              </div>
            </b-container>
          </form>
        </div>
      </b-modal>
    </b-card-body>
  </b-card>
</template>
<script>
    import axios from 'axios'
    import {mdbDatatable} from 'mdbvue';

    export default {
        name: 'DatatablePage',
        components: {
            mdbDatatable
        },
        data() {
            return {
                data: {
                    columns: [
                        {
                            label: 'No',
                            field: 'id',
                            sort: 'asc'
                        },
                        {
                            label: 'Image',
                            field: 'image',
                            sort: 'asc'
                        },
                        {
                            label: 'Driver Name',
                            field: 'driver_name',
                            sort: 'asc'
                        },
                        {
                            label: 'Address',
                            field: 'address',
                            sort: 'asc'
                        },
                        {
                            label: 'Phone',
                            field: 'phone',
                            sort: 'asc'
                        },
                        {
                            label: 'Lisence Number',
                            field: 'lisence_number',
                            sort: 'asc'
                        },
                        {
                            label: 'Lisence Expired',
                            field: 'lisence_expired',
                            sort: 'asc'
                        },
                        {
                            label: 'Expired Date',
                            field: 'expired_date',
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
                            image: 'Image2',
                            driver_name: 'Mondang',
                            address: 'Jalan Teladan no. 17',
                            phone: '098765467',
                            lisence_number: '098765',
                            lisence_expired: '67890-09',
                            expired_date: '2020-08-11',
                            menu: ''
                        },
                        {
                            id: '2',
                            image: 'Image2',
                            driver_name: 'Mondang',
                            address: 'Jalan Teladan no. 17',
                            phone: '098765467',
                            lisence_number: '098765',
                            lisence_expired: '67890-09',
                            expired_date: '2020-08-11',
                            menu: ''
                        },
                        {
                            id: '3',
                            image: 'Image2',
                            driver_name: 'Mondang',
                            address: 'Jalan Teladan no. 17',
                            phone: '098765467',
                            lisence_number: '098765',
                            lisence_expired: '67890-09',
                            expired_date: '2020-08-11',
                            menu: ''
                        },
                        {
                            id: '4',
                            image: 'Image2',
                            driver_name: 'Mondang',
                            address: 'Jalan Teladan no. 17',
                            phone: '098765467',
                            lisence_number: '098765',
                            lisence_expired: '67890-09',
                            expired_date: '2020-08-11',
                            menu: ''
                        },
                        {
                            id: '5',
                            image: 'Image2',
                            driver_name: 'Mondang',
                            address: 'Jalan Teladan no. 17',
                            phone: '098765467',
                            lisence_number: '098765',
                            lisence_expired: '67890-09',
                            expired_date: '2020-08-11',
                            menu: ''
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


<!--<template>-->
<!--  <div class="products">-->
<!--    <div class="card">-->
<!--      <div class="card-body">-->
<!--          <div class="ml-auto text-left">-->
<!-- <div>-->
<!--    <b-button @click="show=true" variant="success">Add</b-button>-->

<!--    <b-modal ref="modal-2" v-model="show" title="Vehicle" hide-footer>-->
<!--      <b-container fluid>-->
<!--       <div class="row">-->
<!--        <div class="col-sm-6"><b>General Information</b></div>-->
<!--        <div class="col-sm-6"><b>Vehicle Information</b></div>-->
<!--		</div>-->
<!--<div class="row">-->
<!--  <div class="col-sm-6">-->
<!--    <div class="card">-->
<!--      <div class="card-body">-->
<!--         <form >-->
<!--            <div class="form-group">-->
<!--              <label for="exampleInputEmail1">Vehicle Name</label>-->
<!--              <input type="text" class="form-control" v-model=form.vehiclename placeholder="Vehicle Name">-->
<!--            </div>-->
<!--            <div class="form-group">-->
<!--              <label for="exampleInputPassword1">Viewer List</label>-->
<!--              <input type="text" class="form-control" v-model=form.viewerlist placeholder="Viewer List">-->
<!--            </div>-->
<!--            <div class="form-group">-->
<!--              <label for="exampleInputPassword1">Imei Number</label>-->
<!--              <input type="text" class="form-control" v-model=form.imeinum placeholder="Imei Number">-->
<!--            </div>-->
<!--            <div class="form-group">-->
<!--              <label for="exampleInputPassword1">Vehicle Category</label>-->
<!--                             <b-form-select v-model="selected" :options="options" class="mb-3" >-->
<!--                             <template slot="first">-->
<!--                                     <option :value="null" disabled>&#45;&#45; Please select an option &#45;&#45;</option>-->
<!--                                   </template>-->
<!--                             </b-form-select>-->
<!--            </div>-->
<!--            <div class="form-group">-->
<!--                 <label for="exampleInputPassword1">Vehicle Model</label>-->
<!--                             <b-form-select v-model="selected" :options="options" class="mb-3" >-->
<!--                             <template slot="first">-->
<!--                                     <option :value="null" disabled>&#45;&#45; Please select an option &#45;&#45;</option>-->
<!--                                   </template>-->
<!--                             </b-form-select>-->
<!--               </div>-->
<!--            <div class="form-group">-->
<!--              <label for="exampleInputPassword1">Major Maintenance</label>-->
<!--              <input type="text" class="form-control" v-model=form.majormaintenance placeholder="Major Maintenance">-->
<!--            </div>-->
<!--            <div class="form-group">-->
<!--              <label for="exampleInputPassword1">Minor Maintenance</label>-->
<!--              <input type="text" class="form-control" v-model=form.minormaintanance placeholder="Minor Maintenance">-->
<!--            </div>-->
<!--            <div class="form-group">-->
<!--              <label for="exampleInputPassword1">Meter Starting Point</label>-->
<!--              <input type="text" class="form-control" v-model=form.meterstartingpoint placeholder="Meter Starting Point">-->
<!--            </div>-->
<!--            <div class="form-group">-->
<!--              <label for="exampleInputPassword1">Fuel Per Km</label>-->
<!--              <input type="text" class="form-control" v-model=form.fuelperkm placeholder="Fuel per Km">-->
<!--            </div>-->
<!--            <div class="form-group">-->
<!--              <label for="exampleInputPassword1">Vehicle Photo</label>-->
<!--              <div class="form-group">-->
<!--              <b-form-file variant="primary" class="form-control-file"></b-form-file>-->
<!--              </div>-->
<!--                            </div>-->
<!--          </form>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="col-sm-6">-->
<!--    <div class="card">-->
<!--      <div class="card-body">-->
<!--     <form>-->
<!--                          <div class="form-group">-->
<!--                             <label for="exampleInputEmail1">Police Number</label>-->
<!--                             <input type="text" class="form-control" v-model=form.policenum placeholder="Police Number">-->
<!--                           </div>-->
<!--                           <div class="form-group">-->
<!--                             <label for="exampleInputPassword1">BPKB Number</label>-->
<!--                             <input type="text" class="form-control" v-model=form.bpkbnum placeholder="BPKB Number">-->
<!--                           </div>-->
<!--                           <div class="form-group">-->
<!--                             <label for="exampleInputPassword1">STNK Number</label>-->
<!--                             <input type="text" class="form-control" v-model=form.stnknum placeholder="STNK Number">-->
<!--                           </div>-->
<!--                           <div class="form-group">-->
<!--                             <label for="exampleInputPassword1">Machine Number</label>-->
<!--                             <input type="text" class="form-control" v-model=form.machinenum placeholder="Machine Number">-->
<!--                           </div>-->
<!--                           <div class="form-group">-->
<!--                             <label for="exampleInputPassword1">Chassis Number</label>-->
<!--                             <input type="text" class="form-control" v-model=form.chassisnum placeholder="Chassis Number">-->
<!--                           </div>-->
<!--                           <div class="form-group">-->
<!--                             <label for="exampleInputPassword1">Fuel Type</label>-->
<!--                             <b-form-select v-model="selected" :options="options" class="mb-3" >-->
<!--                             <template slot="first">-->
<!--                                     <option :value="null" disabled>&#45;&#45; Please select an option &#45;&#45;</option>-->
<!--                                   </template>-->
<!--                             </b-form-select>-->
<!--                           </div>-->
<!--                           <div class="form-group">-->
<!--                             <b-form-select v-model="selected" :options="options" class="mb-3" >-->
<!--                             <template slot="first">-->
<!--                                     <option :value="null" disabled>&#45;&#45; Please select an option &#45;&#45;</option>-->
<!--                                   </template>-->
<!--                             </b-form-select>-->
<!--                           </div>-->
<!--                           <div class="form-group">-->
<!--                             <label for="exampleInputPassword1">Year of Production</label>-->
<!--                             <input type="text" class="form-control" v-model=form.yearofproduction placeholder="Year of Production">-->
<!--                           </div>-->
<!--                           <div class="form-group">-->
<!--                             <label for="exampleInputPassword1">Year of Registration</label>-->
<!--                             <input type="text" class="form-control" v-model=form.yearofregistration placeholder="Year of Registration">-->
<!--                           </div>-->
<!--                           <div class="form-group">-->
<!--                             <label for="exampleInputPassword1">Expired Date </label>-->
<!--                             <input type="text" class="form-control" v-model=form.expireddate placeholder="Vehicle Expired Date">-->
<!--                           </div>-->
<!--                         </form>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->
<!--      </br>-->
<!--                  <div class="row">-->
<!--                  <div class="col"> <b-button variant="danger" block @click="hideModal">Cancel</b-button> </div>-->
<!--                  <div class="col"><b-button variant="success" block type="submit" v-show="!updateSubmit">Save</b-button></div>-->
<!--                  <div class="col"><button variant="success" block type="button" v-show="updateSubmit" @click="update(form)">Update</button></div>-->
<!--                  </div>-->
<!--      </b-container>-->

<!--      <div slot="modal-footer" class="w-100">-->
<!--        <p class="float-left">Modal Footer Content</p>-->
<!--        <b-button-->
<!--          variant="primary"-->
<!--          size="sm"-->
<!--          class="float-right"-->
<!--          @click="show=false"-->
<!--        >-->
<!--          Close-->
<!--        </b-button>-->
<!--      </div>-->
<!--    </b-modal>-->
<!--  </div>-->
<!--          </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  <div>-->
<!--       <div class="card mt-5">-->
<!--         <div class="card-body">-->
<!--           <div class="table-responsive">-->
<!--              <table class="table">-->
<!--                <thead>-->
<!--                  <tr>-->
<!--                    <th v-for="column in columns">-->
<!--                      {{column}}-->
<!--                    </th>-->
<!--                  </tr>-->
<!--                  </thead>-->
<!--                  <tbody>-->
<!--                <tr v-for="user in users" :key="user.idd">-->
<!--                  <td>{{user.id}}</td> &#160;-->
<!--                  <td>{{user.image}}</td> &#160;-->
<!--                  <td>{{user.vehiclename}}</td> &#160;-->
<!--                  <td>{{user.platnum}}</td> &#160;-->
<!--                  <td>{{user.imeinum}}</td> &#160;-->
<!--                  <td>{{user.chassisnum}}</td> &#160;-->
<!--                  <td>{{user.machinenum}}</td> &#160;-->
<!--                  <td>{{user.vehiclestatus}}</td> &#160;-->
<!--                  <td> <button @click="edit(user)">Edit</button></td>-->
<!--                  <td> <button @click="del(user)">Delete</button></td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--              </table>-->
<!--              </div>-->
<!--              </div>-->
<!--              </div>-->
<!--  </div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--/* eslint-disable */-->
<!--import axios from 'axios'-->
<!--export default {-->
<!--  data(){-->
<!--    return{-->
<!--        form: {-->
<!--          vehiclename: '',-->
<!--          viewerlist: '',-->
<!--          imeinum:'',-->
<!--          vehiclecategory:'',-->
<!--          majormaintenance:'',-->
<!--          minormaintenance:'',-->
<!--          meterstartingpoint:'',-->
<!--          policenum:'',-->
<!--          bpknnum:'',-->
<!--          stnknum:'',-->
<!--          machinenum:'',-->
<!--          chassisnum:'',-->
<!--          fueltype:'',-->
<!--          vehiclenum:'',-->
<!--          fuelperkm:'',-->
<!--          vehiclephoto:'',-->
<!--          vehiclecololr:'',-->
<!--          yearofproduction:'',-->
<!--          yearofregistration:'',-->
<!--          expireddate:''-->
<!--        },-->
<!--        show: false,-->
<!--        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],-->
<!--        headerBgVariant: 'dark',-->
<!--        headerTextVariant: 'light',-->
<!--        bodyBgVariant: 'light',-->
<!--        bodyTextVariant: 'dark',-->
<!--        footerBgVariant: 'warning',-->
<!--        footerTextVariant: 'dark',-->
<!--        selected: null,-->
<!--        options: [-->
<!--        { value: 'A', text: 'Option A (from options prop)' },-->
<!--        { value: 'B', text: 'Option B (from options prop)' }-->
<!--        ],-->
<!--        users: [{-->
<!--        id:'1',-->
<!--        image:'mobile',-->
<!--        vehiclename:'mondang',-->
<!--        platnum:'123456',-->
<!--        imeinum:'567890',-->
<!--        chassisnum:'23456',-->
<!--        machinenum:'56789',-->
<!--        vehiclestatus:'Pending'-->
<!--        }],-->
<!--        columns:['No', 'Image','Vehicle Name', 'Plat No.','Imei No.','Chassis Number','Machine Number','Vehicle Status','Menu'],-->
<!--        updateSubmit: false-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.load()-->
<!--  },-->
<!--  methods: {-->
<!--      showModal() {-->
<!--        this.$refs['modal-2'].show()-->
<!--      },-->
<!--      hideModal() {-->
<!--        this.$refs['modal-2'].hide()-->
<!--      },-->
<!--    load(){-->
<!--        axios.get('http://localhost:3000/users').then(res => {-->
<!--        this.users = res.data-->
<!--      }).catch ((err) => {-->
<!--        console.log(err);-->

<!--      })-->
<!--    },-->
<!--      add(){-->
<!--      axios.post('http://localhost:3000/users/', this.form).then(res => {-->
<!--          this.load()-->
<!--          this.form.vehiclename=''-->
<!--          this.form.viewerlist=''-->
<!--          this.form.imeinum=''-->
<!--          this.form.vehiclecategory=''-->
<!--          this.form.majormaintenance=''-->
<!--          this.form.minormaintenance=''-->
<!--          this.form.meterstartingpoint=''-->
<!--          this.form.policenum=''-->
<!--          this.form.bpknnum=''-->
<!--          this.form.stnknum=''-->
<!--          this.form.machinenum=''-->
<!--          this.form.chassisnum=''-->
<!--          this.form.fueltype=''-->
<!--          this.form.vehiclenum=''-->
<!--          this.form.fuelperkm=''-->
<!--          this.form.vehiclephoto=''-->
<!--          this.form.vehiclecololr=''-->
<!--          this.form.yearofproduction=''-->
<!--          this.form.yearofregistration=''-->
<!--          this.form.expireddate=''-->
<!--      })-->
<!--    },-->
<!--    edit(user){-->
<!--          this.$refs['modal-2'].show()-->
<!--          this.updateSubmit = true-->
<!--          this.form.vehiclename=user.vehiclename-->
<!--          this.form.viewerlist=user.viewerlist-->
<!--          this.form.imeinum=user.imeinum-->
<!--          this.form.vehiclecategory=user.vehiclecategory-->
<!--          this.form.majormaintenance=user.majormaintenance-->
<!--          this.form.minormaintenance=user.minormaintenance-->
<!--          this.form.meterstartingpoint=user.meterstartingpoint-->
<!--          this.form.policenum=user.policenum-->
<!--          this.form.bpknnum=user.bpknum-->
<!--          this.form.stnknum=user.stnknum-->
<!--          this.form.machinenum=user.machinenum-->
<!--          this.form.chassisnum=user.chassisnum-->
<!--          this.form.fueltype=user.fueltype-->
<!--          this.form.vehiclenum=user.vehiclenum-->
<!--          this.form.fuelperkm=user.fuelperkm-->
<!--          this.form.vehiclephoto=user.vehiclephoto-->
<!--          this.form.vehiclecolor=user.vehiclecolor-->
<!--          this.form.yearofproduction=user.yearofproduction-->
<!--          this.form.yearofregistration=user.yearofregistration-->
<!--          this.form.expireddate=user.expireddate-->
<!--    },-->
<!--    update(form){-->
<!--       return axios.put('http://localhost:3000/users/' + form.id , {image: this.form.image, vehiclename: this.form.vehiclename, platnum: this.form.platnum, imeinum: this.form.imeinum, chassisnum: this.form.chassisnum, machinenum: this.form.machinenum, vehiclestatus: this.form.vehiclestatus }).then(res => {-->
<!--        this.load()-->
<!--        this.form.id='',-->
<!--        this.form.image= '',-->
<!--        this.form.vehiclename = '',-->
<!--        this.form.platnum='',-->
<!--          this.form.imeinum='',-->
<!--          this.form.chassisnum='',-->
<!--          this.form.machinenum='',-->
<!--          this.form.vehiclestatus='',-->
<!--          this.updateSubmit = false-->
<!--      }).catch((err) => {-->
<!--        console.log(err);-->

<!--      })-->
<!--    },-->
<!--    del(user){-->
<!--      axios.delete('http://localhost:3000/users/' + user.id).then(res =>{-->
<!--          this.load()-->
<!--          let index = this.users.indexOf(form.name)-->
<!--          this.users.splice(index,1)-->
<!--      })-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->


