<template>
  <div class="__page-root">
    <JobsHero title="Java Developer" location="Richmond"/>
    <div class="sections">
      <section class="padded-large">
        <div class="container">
          <div class="row">
            <div class="column col-4">
              <div class="content-wrapper">
                <h6 class="subtitle">
                  <span>summary</span>
                </h6>
              </div>
            </div>
            <div class="column col-8">
              <div class="content-wrapper">
                <p
                  class="summary-text"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse, doloremque illum quisquam commodi labore voluptatum ea praesentium inventore consequuntur nulla quidem, deserunt animi maxime atque iste cupiditate voluptate minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut nam eos esse, tempora nostrum ipsam quos repellendus dicta, magnam voluptate unde perspiciatis, et aliquam maxime inventore voluptatum est dolor?</p>
                <p
                  class="summary-text"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, ipsam unde repudiandae animi autem perferendis nobis rerum voluptatem eius minima non vero, voluptas veritatis, dolores sint quibusdam ex totam iure?</p>
                <h4 class="summary-subheader">Our requirements:</h4>
                <ul class="summary-list">
                  <li
                    class="summary-list-item"
                  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, repudiandae laboriosam perspiciatis perferendis incidunt, ipsum alias nemo commodi dignissimos omnis quaerat! Aliquam voluptatibus autem veritatis nesciunt, odio delectus excepturi nobis?</li>
                  <li
                    class="summary-list-item"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum porro ratione vero nisi dignissimos nemo labore neque placeat cum ad, atque sunt? Repellat numquam, nam nulla doloribus non dolore.</li>
                  <li
                    class="summary-list-item"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut eaque saepe debitis, esse quibusdam quae laborum dicta rem autem eum recusandae dolores consectetur minima non! Assumenda quo tempore qui?</li>
                  <li class="summary-list-item">dsjskld sjdfksjdf jsdfk sdjkfj</li>
                  <li class="summary-list-item">kjdfkdfjkfdj</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="padded-bottom">
        <div class="container">
          <div class="row">
            <div class="column col-4">
              <div class="content-wrapper">
                <h6 class="subtitle">
                  <span>apply now</span>
                </h6>
              </div>
            </div>
            <div class="column col-8">
              <div class="content-wrapper">
                <form
                  id="apply-form"
                  enctype="multipart/form-data"
                  v-on:submit="validateBeforeSubmit"
                >
                  <input
                    class="apply-input light-grey"
                    v-model="firstName"
                    v-validate="'required|firstName'"
                    type="text"
                    name="firstName"
                    data-vv-validate-on="none"
                    placeholder="First Name (required)"
                  >
                  <input
                    class="apply-input light-grey"
                    v-model="lastName"
                    v-validate="'required|lastName'"
                    type="text"
                    name="lastName"
                    data-vv-validate-on="none"
                    placeholder="Last Name (required)"
                  >
                  <input
                    class="apply-input light-grey"
                    v-model="email"
                    v-validate="'required|email'"
                    type="email"
                    name="email"
                    data-vv-validate-on="none"
                    placeholder="Email (required)"
                  >
                  <input
                    class="apply-input light-grey"
                    v-model="phone"
                    v-validate="'required|phone'"
                    type="number"
                    name="phone"
                    data-vv-validate-on="none"
                    placeholder="Subscribe"
                  >
                  <input id="file" type="file" @change="processFile">
                </form>
                <button class="box-button">
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
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import JobsHero from "../../../components/hero/JobsHero.vue";

export default {
  layout: "light",
  components: {
    JobsHero
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>

.perks-wrapper
  display: flex
  flex-wrap: wrap
  margin-top: 40px

.perk
  width: 33.33333%
  max-width: 33.33333%
  flex-basis: 33.33333%
  padding: 30px

.perk-title
  text-transform: uppercase
  margin-bottom: 20px
  font:
      size: .9rem

.city
  font: 
    size: 80px
    weight: 700
  line-height: 84px
  letter-spacing: -4px

.technology-wrapper
  display: flex
  margin-top: 80px

.job-wrapper
  margin: 40px 0 80px

.jobs-location-title
  margin-bottom: 50px
  font: 
    size: 80px
    weight: 700
  line-height: 84px
  letter-spacing: -4px

.job
  border-bottom: 1px solid $spacer-color
  padding-bottom: 20px
  margin: 0 15% 30px 0

.jobs-link
  font:
    size: 1.8rem
    family: $font-family-copy
  color: #000
  transition: color .18s

.jobs-link:hover
  color: $font-color-pink

</style>
