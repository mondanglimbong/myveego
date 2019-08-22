<template>
  <div>
    <div class="row">
      <b-card class="col-sm-2 bg-info  text-center pad-btm mar-btm">
          <div class="pad-all">
            <div class="col-xs-12 pad-top">
              <img alt="Avatar" class="img-lg img-circle" src="../../assets/upload/driver/default/default.png">
            </div>
            <div class="col-xs-12 pad-top">
              <h3 class="mar-no" style="color: white">driver name</h3>
            </div>
            <div class="col-xs-12">
              <p><i class="cui-location-pin icons mt-lg-n1"></i>driver address</p>
            </div>
            <span class="col-xs-6 pad-no mar-no"><i class="icon-badge icons mt-lg-n1"></i> driver lisence</span>
            <span class="col-xs-6 pad-no mar-no"><i class="icon-phone icons mt-lg-n1"></i> driver phone</span>
          </div>
      </b-card>
      <div class="col-sm-10">
        <div class="card">
          <div class="text-center">
          <b-card-group deck>
            <b-card>
              <div class="alert alert-danger">
                <i class="icon-control-forward icons font-2xl d-block mt-4"></i>
                <span><b>Rapid Acceleration </b> </span>
              </div>
              <b-card-text>
                <h4 class="text-2x mar-no">
                  0 Times
                </h4>
              </b-card-text>
            </b-card>
            <b-card>
              <div class="alert alert-warning">
                <i class="icon-control-end icons font-2xl d-block mt-4"></i>
                <span><b>Rough Braking</b></span>
              </div>
              <b-card-text>
                <h4 class="text-2x mar-no">
                  0 Times
                </h4>
              </b-card-text>
            </b-card>

            <b-card>
              <div class="alert alert-success">
                <i class="icon-action-undo icons font-2xl d-block mt-4"></i>
                <span><b> Sharp Turn </b></span>
              </div>
              <b-card-text>
                <h4 class="text-2x mar-no">
                  0 Times
                </h4>
              </b-card-text>
            </b-card>
            <b-card>
              <b-alert show variant="primary">
                  <span
                  ><i class="icon-arrow-up icons font-2xl d-block mt-4"></i>
                    <b>High RPM</b> </span
                  >
              </b-alert>
              <b-card-text>
                <h4 class="text-2x mar-no">
                  0 Times
                </h4>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>

        <div class="mt-3">
          <div class="text-center">
          <b-card-group deck>
            <b-card>
              <div class="alert alert-secondary">
                  <span
                  >
                    <i class="icon-refresh icons font-2xl d-block mt-4"></i>
                    <b>No Warm Up</b>
                    </span
                    >
              </div>
              <b-card-text>
                <h4 class="text-2x mar-no">
                  0 Times
                </h4>
              </b-card-text>
            </b-card>

            <b-card>
              <div class="alert alert-info">
                  <span
                  >
                    <i class="icon-camera icons font-2xl d-block mt-4"></i>
                    <b>Fatigue Driving</b> </span
                  >
              </div>
              <b-card-text>
                <h4 class="text-2x mar-no">
                  0 Times
                </h4>
              </b-card-text>
            </b-card>
            <b-card>
              <div class="alert alert-dark">
                  <span
                  ><i class="icon-control-pause  font-2xl d-block mt-4"></i>
                    <b>Long Idle</b> </span
                  >
              </div>
              <b-card-text>
                <h4 class="text-2x mar-no">
                  0 Times
                </h4>
              </b-card-text>
            </b-card>
            <b-card>
              <div class="alert alert-warning">
                  <span
                  ><i class="icon-shuffle  font-2xl d-block mt-4"></i>
                    <b>Rough Terrain</b> </span>
              </div>
              <b-card-text>
                <h4 class="text-2x mar-no">
                  0 Times
                </h4>
              </b-card-text>
            </b-card>
            <div class="mt-3">
            </div>
          </b-card-group>
          <div class="mt-3">
            <div class="card">
              <b-tabs content-class="mt-3 tab-left">
                <div class="col-4 text-right">
                  <b-tab title="Graphics" active><p>I'm the first tab</p></b-tab>
                  <b-tab title="Details"><p>I'm the second tab</p></b-tab>
                </div>
              </b-tabs>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<style>
  .container {
    background: #007BA7;
    align-content: center;
  }

  .image-circle {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin: 40px;
  }

  .profile-usertitle {
    color: #FFFFFF;
    margin-top: 120px;
  }

  .profile-usertitle-name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 7px;
  }

  .profile-usertitle-job {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  <
  /
  styles >
