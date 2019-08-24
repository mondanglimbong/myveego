<template>
  <b-row>
    <b-col cols="12" xl="6">
      <transition name="slide">
        <div id="dashboard">
          <VueResponsiveGridLayout

            @layout-update="onLayoutUpdate"
            @layout-change="onLayoutChange"
            @layout-init="onLayoutInit"
            :layouts="layouts"
            :compactType="'vertical'"
            :breakpoint="breakpoint"
            :cols="cols"
            ref="layout"
          >
            <template slot-scope="props">
              <VueGridItem
                :i=1
                :w=16
                :h=27
                :x=0
                :y=0
                :containerWidth="props.containerWidth"
                :rowHeight="props.rowHeight"
                :className="'grid-item'"
                :cols="props.cols"
                :heightFromChildren="false"
                :maxRows="props.maxRows"
              >
                <div>
                  <vehicle-map></vehicle-map>
                </div>
              </VueGridItem>
            </template>
          </VueResponsiveGridLayout>
          <VueResponsiveGridLayout
            @layout-update="onLayoutUpdate"
            @layout-change="onLayoutChange"
            @layout-init="onLayoutInit"
            :layouts="layouts"
            :compactType="'vertical'"
            :breakpoint="breakpoint"
            :cols="cols"
            ref="layout"
          >
            <template slot-scope="props">
              <VueGridItem
                :i=2
                :w=4
                :h=9
                :x=0
                :y=27
                :containerWidth="props.containerWidth"
                :rowHeight="props.rowHeight"
                :className="'grid-item'"
                :cols="props.cols"
                :heightFromChildren="false"
                :maxRows="props.maxRows"
              >
                <div>
                  <vehicle-gps-status></vehicle-gps-status>
                </div>
              </VueGridItem>
            </template>
          </VueResponsiveGridLayout>
          <VueResponsiveGridLayout

            @layout-update="onLayoutUpdate"
            @layout-change="onLayoutChange"
            @layout-init="onLayoutInit"
            :layouts="layouts"
            :compactType="'vertical'"
            :breakpoint="breakpoint"
            :cols="cols"
            ref="layout"
          >
            <template slot-scope="props">
              <VueGridItem
                :i=3
                :w=4
                :h=9
                :x=4
                :y=27
                :containerWidth="props.containerWidth"
                :rowHeight="props.rowHeight"
                :className="'grid-item'"
                :cols="props.cols"
                :heightFromChildren="false"
                :maxRows="props.maxRows"
              >
                <div>
                  <vehicleon-trip></vehicleon-trip>
                </div>
              </VueGridItem>
            </template>
          </VueResponsiveGridLayout>

          <VueResponsiveGridLayout

            @layout-update="onLayoutUpdate"
            @layout-change="onLayoutChange"
            @layout-init="onLayoutInit"
            :layouts="layouts"
            :compactType="'vertical'"
            :breakpoint="breakpoint"
            :cols="cols"
            ref="layout"
          >
            <template slot-scope="props">
              <VueGridItem
                :i=4
                :w=4
                :h=9
                :x=8
                :y=27
                :containerWidth="props.containerWidth"
                :rowHeight="props.rowHeight"
                :className="'grid-item'"
                :cols="props.cols"
                :heightFromChildren="false"
                :maxRows="props.maxRows"
              >
                <div>
                  <vehicle-move></vehicle-move>
                </div>
              </VueGridItem>
            </template>
          </VueResponsiveGridLayout>
          <VueResponsiveGridLayout

            @layout-update="onLayoutUpdate"
            @layout-change="onLayoutChange"
            @layout-init="onLayoutInit"
            :layouts="layouts"
            :compactType="'vertical'"
            :breakpoint="breakpoint"
            :cols="cols"
            ref="layout"
          >
            <template slot-scope="props">
              <VueGridItem
                :i=5
                :w=4
                :h=9
                :x=12
                :y=27
                :containerWidth="props.containerWidth"
                :rowHeight="props.rowHeight"
                :className="'grid-item'"
                :cols="props.cols"
                :heightFromChildren="false"
                :maxRows="props.maxRows"
              >
                <div>
                  <vehicle-position></vehicle-position>
                </div>
              </VueGridItem>
            </template>
          </VueResponsiveGridLayout>
          <VueResponsiveGridLayout

            @layout-update="onLayoutUpdate"
            @layout-change="onLayoutChange"
            @layout-init="onLayoutInit"
            :layouts="layouts"
            :compactType="'vertical'"
            :breakpoint="breakpoint"
            :cols="cols"
            ref="layout"
          >
            <template slot-scope="props">
              <VueGridItem
                :i=6
                :w=8
                :h=9
                :x=16
                :y=0
                :containerWidth="props.containerWidth"
                :rowHeight="props.rowHeight"
                :className="'grid-item'"
                :cols="props.cols"
                :heightFromChildren="false"
                :maxRows="props.maxRows"
              >
                <div>
                  <vehicle-total></vehicle-total>
                </div>
              </VueGridItem>
            </template>
          </VueResponsiveGridLayout>
          <VueResponsiveGridLayout

            @layout-update="onLayoutUpdate"
            @layout-change="onLayoutChange"
            @layout-init="onLayoutInit"
            :layouts="layouts"
            :compactType="'vertical'"
            :breakpoint="breakpoint"
            :cols="cols"
            ref="layout"
          >
            <template slot-scope="props">
              <VueGridItem
                :i=6
                :w=8
                :h=27
                :x=16
                :y=9
                :containerWidth="props.containerWidth"
                :rowHeight="props.rowHeight"
                :className="'grid-item'"
                :cols="props.cols"
                :heightFromChildren="false"
                :maxRows="props.maxRows"
              >
                <div>
                  <vehicle-list></vehicle-list>
                </div>
              </VueGridItem>
            </template>
          </VueResponsiveGridLayout>
        </div>
      </transition>
    </b-col>
  </b-row>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import VueResponsiveGridLayout from '../components/VueResponsiveGridLayout.vue';
    import VueGridItem from '../components/VueGridItem.vue';
    import ComponentItem from '../components/ComponentItem.vue';
    import {namespace} from 'vuex-class';
    import VehicleTotal from './widgets/vehicletotal.vue';
    import VehicleMove from './widgets/vehiclemove.vue';
    import VehicleonTrip from './widgets/vehicle_on_trip.vue';
    import VehiclePosition from './widgets/vehicle_position.vue';
    import VehicleGpsStatus from './widgets/vehicle_gps_status.vue';
    import VehicleList from './widgets/vehiclelist.vue';
    import VehicleMap from './widgets/vehicle_map.vue';

    const layoutModule = namespace('layout');

    @Component({
        name: 'dash',
        components: {
            VueResponsiveGridLayout,
            VueGridItem,
            ComponentItem,
            VehicleTotal,
            VehicleMove,
            VehicleonTrip,
            VehiclePosition,
            VehicleGpsStatus,
            VehicleList,
            VehicleMap


        },
    })
    export default class App extends Vue {
        @layoutModule.State('layouts') public layouts;
        @layoutModule.State('breakpoint') public breakpoint;
        @layoutModule.State('cols') public cols;

    }
</script>
