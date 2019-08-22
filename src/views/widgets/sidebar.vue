<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h5><b>Report</b></h5>
        <b-form-checkbox-group
          id="report"
          v-model="selected"
          :options="report"
          name="report"
          class="ml-4"
          aria-label="Individual report"
          stacked
        ></b-form-checkbox-group>
      </div>
      <div class="col-3">
        <h5><b>Assignments</b></h5>
        <b-form-checkbox-group
          id="assignments"
          v-model="selected"
          :options="assignments"
          name="assignments"
          class="ml-4"
          aria-label="Individual assignments"
          stacked
        ></b-form-checkbox-group>
      </div>
      <div class="col-3">
        <h5><b>Master Data</b></h5>
        <b-form-checkbox-group
          id="masterdata"
          v-model="selected"
          :options="masterdata"
          name="master data"
          class="ml-4"
          aria-label="Individual masterdata"
          stacked
        ></b-form-checkbox-group>
      </div>
      <div class="col-3">
        <h5><b>Maintanace</b></h5>
        <b-form-checkbox-group
          id="Maintanance"
          v-model="selected"
          :options="maintanance"
          name="maintanance"
          class="ml-4"
          aria-label="Individual maintanance"
          stacked
        ></b-form-checkbox-group>
        <h5><b>Widget Setting</b></h5>
        <b-form-checkbox-group
          id="widgetsetting"
          v-model="selected"
          :options="widgetsetting"
          name="widgetsetting"
          class="ml-4"
          aria-label="Individual widgetsetting"
          stacked
        ></b-form-checkbox-group>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                report: ['Vehicle', 'Driver', 'Report Trip', 'Report', 'Upload Case', 'Summary', 'Upload Assset', 'Change History', 'Daily Report', 'Working Hour',],
                assignments: ['Manage', 'Forklift Control', 'Fleet Control',],
                masterdata: ['User', 'Vehicle', 'Driver', 'Group', 'Notification', 'Pool', 'Customer Point', 'Assets'],
                maintanance: ['Major Maintanance', 'Minor Maintanance', 'Maintanance Report', 'List',],
                widgetsetting: ['iFrame', 'Widget COnfiguration',],
                selected: [],
                allSelected: false,
                indeterminate: false
            }
        },
        methods: {
            toggleAll(checked) {
                this.selected = checked ? this.flavours.slice() : []
            }
        },
        watch: {
            selected(newVal, oldVal) {
                // Handle changes in individual flavour checkboxes
                if (newVal.length === 0) {
                    this.indeterminate = false
                    this.allSelected = false
                } else if (newVal.length === this.flavours.length) {
                    this.indeterminate = false
                    this.allSelected = true
                } else {
                    this.indeterminate = true
                    this.allSelected = false
                }
            }
        }
    }
</script>
