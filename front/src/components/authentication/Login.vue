<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg6 offset-xs0 offset-lg3>
        <v-card>
          <v-card-title class="blue darken-1 white--text">
            <span class="headline">Ingresa al sistema</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  prepend-icon="email"
                  label="Correo Electrónico"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                   prepend-icon="lock"
                   label="Contraseña"
                   v-model="password"
                   :rules="passwordRules"
                   :append-icon="e1 ? 'visibility' : 'visibility_off'"
                   :append-icon-cb="() => (e1 = !e1)"
                   :type="e1 ? 'password' : 'text'"
                   :counter="50"
                   required
                ></v-text-field>
                <v-btn color="success"
                  @click="submit"
                  :disabled="!valid"
                >
                Ingresar
                </v-btn>
                <v-btn color="info" @click="clear">Reiniciar</v-btn>
            </v-form>
          </v-card-text>
       </v-card>
      </v-flex>
    </v-layout>
 </v-container>
</template>

<script>
  import axios from 'axios'

  var axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
  });

  export default {
    data: () => ({
      valid: false,
      password: '',
      passwordRules: [
        v => !!v || 'La contraseña es requerida',
        v => (v && v.length >= 6) || 'La contraseña debe tener un mínimo de 6 caracteres',
        v => (v && v.length <= 50) || 'La contraseña debe tener un máximo de 50 caracteres'
      ],
      email: '',
      emailRules: [
        v => !!v || 'El correo es requerido',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      e1: true,
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          // alert('Pass ' + this.password + ' y email ' + this.email);
          var data = {
                client_id: 2,
                client_secret: '99aoFG3TR21izoYfGXNK2twKBDzTEVKKjRiCTTvq',
                grant_type: 'password',
                username: this.email,
                password: this.password
          }
           axiosInstance.post('/oauth/token', data )
          .then(function (response) {
             alert( response );
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
