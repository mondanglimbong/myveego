<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="../assets/img/profile-photos/1.png"
        class="img-avatar"
        alt="rucikajkt" />
    </template>

    <template slot="dropdown">
      <b-dropdown-item><i class="fa fa-user" /> Profile</b-dropdown-item>
      <b-dropdown-item to="/setting"><i class="fa fa-wrench" /> Settings</b-dropdown-item>
      <b-dropdown-item><i class="icon-info icons" />Help</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item to="/pages/login" ><i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
}
</script>
