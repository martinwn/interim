<template>
  <div class="__page-root">
    <div class="sections">
      <section class="black">
        <div class="fullpage">
          <div class="content-wrapper form-wrapper">
            <form class="text-white" id="hire-us-form" v-on:submit="validateBeforeSubmit">
              <label for="name">Hello, my name is</label>
              <span class="input-wrapper">
                <input v-model="name" type="text" name="name" placeholder="first & last">
              </span>
              <span>.</span>
              <label for="address">I'm from</label>
              <span class="input-wrapper">
                <input v-model="address" type="text" name="address" placeholder="city, st">
              </span>
              <span>.</span>
              <label for="phone">You can reach me on my phone at</label>
              <span class="input-wrapper">
                <input v-model="phone" type="number" name="phone" placeholder="xxx xxx xxxx">
              </span>
              <label for="email">or via email at</label>
              <span class="input-wrapper">
                <input v-model="email" type="text" name="email" placeholder="your@email.com">
              </span>
              <span>.</span>
            </form>
            <button class="box-button" @click="validateBeforeSubmit">
              <span class="work-arrow">
                <svg
                  class="arrow-thin-right__svg"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25px"
                  height="26.005px"
                  viewBox="286.5 382.498 39.002 26.005"
                  enable-background="new 286.5 382.498 39.002 26.005"
                  title="Next"
                >
                  <g>
                    <polygon
                      fill="#000"
                      points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395 	"
                    ></polygon>
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: "light",
  data() {
    return {
      uploadedFile: [],
      fileLocation: "asdfasdf",
      name: "",
      address: "",
      phone: "",
      email: ""
    };
  },
  methods: {
    processFile(event) {
      var file = event.target.files[0];
      this.uploadedFile = event.target.files[0];
      var reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = () => {
        const result = btoa(reader.result);
        this.fileLocation = result;
      };
    },
    validateBeforeSubmit(e) {
      e.preventDefault();

      this.$validator.validateAll().then(res => {
        if (res) {
          return this.submitUser();
        }
        this.submitUser();
        console.log("incorrect!");
      });
    },
    submitUser() {
      console.log(this.fileLocation);
      Email.send({
        SecureToken: "13bb9628-60c1-4de0-8f25-706d24c50d76",
        To: "will@dataconcepts-inc.com",
        From: "will@dataconcepts-inc.com",
        Subject: "test email",
        Body: `<h1>name: ${this.name}</h1><h1>address: ${
          this.address
        }</h1><h1>phone: ${this.phone}</h1><h1>email: ${this.email}</h1>`,
        Attachments: [
          {
            name: this.uploadedFile.name,
            data: this.fileLocation
          }
        ]
      }).then(message => alert(message));
    }
  }
};
</script>

<style lang="sass" scoped>

.fullpage
  min-height: 100vh
  width: 100%
  overflow: hidden

.form-wrapper
    display: flex
    justify-content: center
    align-items: center
    height: 100%
    position: relative
    font-size: 50px
    line-height: 65px
    max-width: 1380px
    margin: 0 auto
    text-align: center
    font: 
        family: $font-family-header

span
    display: inline-block
    position: relative
    font-size: 50px
    line-height: 65px
    margin-right: 10px

form
    padding: 0 10px

input
  background: 0 0
  border: none
  vertical-align: baseline
  border-bottom: 1.5px solid #fff
  color: $link-color
  min-width: 300px
  max-width: 500px
  text-align: center
  word-break: break-word
  white-space: pre-wrap
  transition: all 150ms cubic-bezier(0.645, 0.045, 0.355, 1)
  font:
    size: 50px
  line-height: 50px
  min-height: 50px
  height: 100%
  margin: 0 0 10px
  outline: 0 !important
  padding-left: 10px
  padding-right: 10px
  &::placeholder
    text-transform: uppercase
    line-height: 65px
    font:
        size: 14px
    letter-spacing: 1px

label
    margin-right: 10px

button
    position: absolute
    bottom: 0
    left: 50%
    transform: translate(-50%, 0)
    background: #fff
    border: 0 !important
    cursor: pointer
    transition: 2s cubic-bezier(.18,1,.21,1)
    width: 175px
    height: 100px
    background-color: #fff
    &:hover
        background-color: $link-color

button:focus
  outline: none !important
</style>
