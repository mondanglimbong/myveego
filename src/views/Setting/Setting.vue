<template>
  <div id="dashboard">
    <VueResponsiveGridLayout
      @layout-update="onLayoutUpdate"
      @layout-change="onLayoutChange"
      @layout-init="onLayoutInit"
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=1
          :x=0
          :y=0
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
    <VueResponsiveGridLayout
      @layout-update="onLayoutUpdate"
      @layout-change="onLayoutChange"
      @layout-init="onLayoutInit"
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=2
          :x=2
          :y=0
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=3
          :x=4
          :y=0
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=4
          :x=6
          :y=0
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=5
          :x=8
          :y=0
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
          :className="'grid-item'"
          :cols="props.cols"
          :heightFromChildren="false"
          :maxRows="props.maxRows"
        >
          <div>
            <vehicle-idle></vehicle-idle>
          </div>
        </VueGridItem>
      </template>
    </VueResponsiveGridLayout>
    <VueResponsiveGridLayout
      @layout-update="onLayoutUpdate"
      @layout-change="onLayoutChange"
      @layout-init="onLayoutInit"
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=6
          :x=10
          :y=0
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=7
          :x=0
          :y=9
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=8
          :x=2
          :y=9
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
    <VueResponsiveGridLayout
      @layout-update="onLayoutUpdate"
      @layout-change="onLayoutChange"
      @layout-init="onLayoutInit"
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=9
          :x=4
          :y=9
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=10
          :x=6
          :y=9
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=11
          :x=8
          :y=9
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=12
          :x=10
          :y=9
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=13
          :x=8
          :y=27
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=14
          :x=0
          :y=18
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=15
          :x=2
          :y=18
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=16
          :x=4
          :y=18
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=17
          :x=6
          :y=18
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=18
          :x=8
          :y=18
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=19
          :x=10
          :y=18
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=20
          :x=10
          :y=27
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=21
          :x=0
          :y=27
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=22
          :x=2
          :y=27
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=23
          :x=4
          :y=27
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=24
          :x=6
          :y=27
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=25
          :x=6
          :y=27
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
      @width-change="onWidthChange"
      @breakpoint-change="onBreakpointChange"
      :layouts="layouts"
      :compactType="'vertical'"
      :breakpoint="breakpoint"
      :cols="cols"
      ref="layout"
    >
      <template slot-scope="props">
        <VueGridItem
          :i=26
          :x=8
          :y=27
          :h=9
          :w=2
          :containerWidth="props.containerWidth"
          :rowHeight="props.rowHeight"
          :isDraggable="true"
          :isResizable="true"
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
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import VueResponsiveGridLayout from '../../components/VueResponsiveGridLayout.vue';
    import VueGridItem from '../../components/VueGridItem.vue';
    import ComponentItem from '../../components/ComponentItem.vue';
    import {namespace} from 'vuex-class';
    import {Breakpoint, ResponsiveLayout} from '@/lib/responsiveUtils';
    import {Layout} from '@/lib/utils';
    import VehicleIdle from '../widgets/vehicle_idle.vue';
    import VehicleTotal from '../widgets/vehicletotal.vue';
    import VehicleMove from '../widgets/vehiclemove.vue';
    import VehicleonTrip from '../widgets/vehicle_on_trip.vue';
    import VehiclePosition from '../widgets/vehicle_position.vue';
    import VehicleGpsStatus from '../widgets/vehicle_gps_status.vue';
    import VehicleList from '../widgets/vehiclelist.vue';
    import VehicleMap from '../widgets/vehicle_map.vue';

    const layoutModule = namespace('layout');

    @Component({
        name: 'dashboard',
        components: {
            VueResponsiveGridLayout,
            VueGridItem,
            ComponentItem,
            VehicleList,
            VehicleonTrip,
            VehicleTotal,
            VehicleMove,
            VehiclePosition,
            VehicleGpsStatus,
            VehicleMap,
            VehicleIdle
        },
    })
    export default class App extends Vue {
        @layoutModule.State('layouts') public layouts;
        @layoutModule.State('breakpoint') public breakpoint;
        @layoutModule.State('cols') public cols;

        @layoutModule.Action('updateLayout') public updateLayout;
        @layoutModule.Action('updateBreakpoint') public updateBreakpoint;
        @layoutModule.Action('updateCols') public updateCols;

        public onLayoutUpdate(layout: Layout, layouts: ResponsiveLayout, last) {
            this.updateLayout({layout, breakpoint: this.breakpoint});
        }

        public onLayoutChange(layout: Layout, layouts: ResponsiveLayout, breakpoint: Breakpoint) {
            this.updateLayout({layout, breakpoint});
        }

        public onLayoutInit(layout, currentLayouts, cols, breakpoint) {
            this.updateCols({cols});
            this.updateBreakpoint({breakpoint});
            this.updateLayout({layout, breakpoint});
        }

        public onBreakpointChange(breakpoint: Breakpoint) {
            this.updateBreakpoint({breakpoint});
        }

        public onWidthChange(width: number, cols: number) {
            this.updateCols({cols});
        }
    }
</script>

<style>

  .resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0px;
    text-align: right;
  }

  .resizable-handle::after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid #000000;
    border-bottom: 2px solid #000000;
  }

  .vue-grid-draggable-container {
    width: 100%;
    height: 100%;
  }

</style>
