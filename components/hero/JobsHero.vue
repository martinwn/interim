<template>
  <section class="jobs-hero black">
    <div class="container">
      <div class="row">
        <div class="column col-12 center-content">
          <div class="content-wrapper hero-text-wrapper text-white">
            <div>
              <span class="hero-kicker">{{location}}</span>
              <h3 class="text-hero-title">{{ title}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "location"]
};
</script>


<style lang="sass" scoped>

.jobs-hero
  height: 60vh
  width: 100%
  overflow: hidden

.text-hero-title
  display: block
  margin: 0
  font:
    size: 100px
    family: $font-family-header
    weight: 900
  line-height: .95

.hero-text-wrapper
  height: 100%
  position: relative

.hero-text-wrapper > div
  position: absolute
  bottom: 14%

.hero-kicker
  font:
    family: $font-family-header
  letter-spacing: 1px

</style>
