<template>
  <div class="main">
    <button
      class="btn btn-primary btn-margin"
      v-if="!authenticated"
      @click="login()">
      Log In
    </button>
    <!-- <button
      class="btn btn-primary btn-margin"
      v-if="authenticated"
      @click="privateMessage()">
      Call Private
    </button> -->
    <button
      class="btn btn-primary btn-margin"
      v-if="authenticated"
      @click="logout()">
      Log Out
    </button>
    <home v-if="authenticated"></home>
  </div>
</template>

<script>
import Home from '@/views/Home';
import axios from 'axios';
import AuthService from './auth/AuthService';

const API_URL = 'http://localhost:8000';

const auth = new AuthService();

export default {
  name: 'app',
  components: { Home },
  data() {
    this.handleAuthentication();
    this.authenticated = false;
    // eslint-disable-next-line
    auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated;
    });

    return {
      authenticated: false,
    };
  },
  methods: {
    // this method calls the AuthService login() method
    login() {
      auth.login();
    },
    handleAuthentication() {
      auth.handleAuthentication();
    },
    logout() {
      auth.logout();
    },
    privateMessage() {
      const url = `${API_URL}/api/private/`;
      // eslint-disable-next-line
      return axios.get(url, { headers: {Authorization: `Bearer ${AuthService.getAuthToken()}` } }).then((response) => {
      // eslint-disable-next-line
        console.log(response.data);
        this.message = response.data || '';
      });
    },
  },
};
</script>

<style>
.main {
  padding-top: 20px;
}
</style>
