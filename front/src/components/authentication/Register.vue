<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg6 offset-xs0 offset-lg3>
        <v-card>
          <v-card-title class="blue darken-1 white--text">
            <span class="headline">Registrate en el sistema</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  prepend-icon="person"
                  label="Nombre de usuario"
                  v-model="name"
                  :rules="nameRules"
                  required
                ></v-text-field>
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
                Registrame
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

  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => v.length >= 3 || 'El nombre debe tener 3 caracteres como mínimo'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'La contraseña es requerida',
        v => (v && v.length >= 8) || 'La contraseña debe tener un mínimo de 8 caracteres'
      ],
      email: '',
      emailRules: [
        v => !!v || 'El correo es requerido',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'El email debe ser válido'
      ],
      e1: true,
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          alert('Nombre ' + this.name + ' Pass ' + this.password + ' y email ' + this.email);
          // axios.post('/api/submit', {
          //   password: this.password,
          //   email: this.email
          // })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
