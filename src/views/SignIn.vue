<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" flat>
            <v-toolbar-title>Sign In form</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="doSignin">
              <v-text-field
                name="login"
                label="Email"
                type="mail"
                v-model="email"
                :rules="emailRules"
              />
              <v-text-field
                name="password"
                label="Password"
                type="password"
                v-model="password"
                :rules="passwordRules"
              />
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                v-model="confirmPassword"
                :rules="passwordConfirm"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text="" to="/admin">Login</v-btn>
            <v-spacer />
            <v-btn color="primary" @click="signin" :disabled="!enableSubmit"
              >Sign In</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from "firebase";
import "firebase/auth";
import rules from "../plugins/mixin";
export default {
  name: "Signin",
  mixins: [rules],
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      passwordConfirm: [v => v === this.password || "Password must match"],

      rules: []
    };
  },
  computed: {
    enableSubmit() {
      return (
        this.confirmPassword === this.password &&
        this.email !== "" &&
        this.password !== ""
      );
    }
  },
  methods: {
    async signin() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log("User creato ", user);
        this.$router.replace({ name: "home" });
      } catch (error) {
        console.error("Errore creazione user ", error);
      }
    }
  }
};
</script>

<style></style>
