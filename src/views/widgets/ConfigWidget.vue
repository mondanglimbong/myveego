<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Identity" active>
          <b-card-text>
            <div>
              User :
              <b-form-select v-model="selected" :options="options" class="mb-3">
                <!-- This slot appears above the options from 'options' prop -->
                <template slot="first">
                  <option :value="null" disabled>Current User</option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <option value="C">Option C</option>
                <option value="D">Option D</option>
              </b-form-select>
              <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab title="Themes">
          <b-card-text>Tab Contents 2</b-card-text>
        </b-tab>
        <b-tab title="Sidebar">
          <div class="main-panel">
            <sidebar-content></sidebar-content>
          </div>
        </b-tab>
        <b-tab title="Widget">
          <div class="main-panel">
            <widget-content></widget-content>
          </div>
        </b-tab>
      </b-tabs>
      <div class="tab-footer clearfix">
        <div style="float: right;">
          <button id="submitButton" class="btn btn-primary">Validate</button>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
    import WidgetContent from "./Widget.vue";
    import SidebarContent from "./sidebar.vue";
    export default {
        data() {
            return {
                selected: null,
                options: [
                    {value: 'A', text: 'Option A (from options prop)'},
                    {value: 'B', text: 'Option B (from options prop)'}
                ]
            }
        },
        components: {
            WidgetContent,
            SidebarContent
        }
    }
</script>
