<template>
  <div class="__page-root">
    <RootHero title="Together."/>
    <div class="sections">
      <section class="padded-large black">
        <div class="container">
          <div class="row">
            <div class="column col-4">
              <div class="content-wrapper text-white">
                <h6 class="subtitle white">
                  <span>perks</span>
                </h6>
              </div>
            </div>
            <div class="column col-12">
              <div data-aos="fade-up" class="copy-wrapper perks-wrapper text-white">
                <div v-for="perk in perks" v-bind:key="perk.title" class="perk">
                  <h1 class="perk-title">{{perk.title}}</h1>
                  <p class="perk-copy">{{perk.copy}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="padded-large">
        <div class="container">
          <div class="row">
            <div class="column col-3">
              <div class="content-wrapper">
                <h6 class="subtitle">
                  <span>current openings</span>
                </h6>
              </div>
            </div>
            <div class="column col-9">
              <div class="content-wrapper jobs-wrapper">
                <div class="outer">
                  <h3 class="jobs-location-title">Richmond, VA.</h3>
                  <div class="job-wrapper">
                    <div class="job">
                      <nuxt-link
                        class="jobs-link"
                        to="/careers/richmond/java-developer"
                      >Java Developer</nuxt-link>
                    </div>
                    <div class="job">
                      <nuxt-link class="jobs-link" to="/services/cloud">Hadoop Administrator</nuxt-link>
                    </div>
                    <div class="job">
                      <nuxt-link
                        class="jobs-link"
                        to="/services/big-data"
                      >Senior Splunk Administrator</nuxt-link>
                    </div>
                    <div class="job">
                      <nuxt-link
                        class="jobs-link"
                        to="/services/business-intelligence"
                      >Site Reliability/Monitoring Engineer</nuxt-link>
                    </div>
                    <div class="job">
                      <nuxt-link
                        class="jobs-link"
                        to="/services/data-analytics"
                      >Sr. GIS Systems Architect</nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="outer">
                  <h3 class="jobs-location-title">Washington, DC.</h3>
                  <div class="job-wrapper">
                    <div class="job">
                      <nuxt-link
                        class="jobs-link"
                        to="/services/application-development"
                      >Sr. Java Developer</nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="outer">
                  <h3 class="jobs-location-title">Denver, CO.</h3>
                  <div class="job-wrapper">
                    <div class="job">
                      <nuxt-link
                        class="jobs-link"
                        to="/services/application-development"
                      >Project Manager</nuxt-link>
                    </div>
                    <div class="job">
                      <nuxt-link
                        class="jobs-link"
                        to="/services/application-development"
                      >Java Developer</nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="outer">
                  <h3 class="jobs-location-title">Salem, Oregon.</h3>
                  <div class="job-wrapper">
                    <div class="job">
                      <nuxt-link
                        class="jobs-link"
                        to="/services/application-development"
                      >Business Systems Analyst</nuxt-link>
                    </div>
                    <div class="job">
                      <nuxt-link
                        class="jobs-link"
                        to="/services/application-development"
                      >.NET Developer</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import RootHero from "../../components/hero/RootHero.vue";

export default {
  components: {
    RootHero
  },
  data() {
    return {
      perks: [
        {
          title: "Company Benefits",
          copy:
            "Our team’s health and wellness is a top priority. We offer fully paid health benefits for all employees. We also pay half for your spouse."
        },
        {
          title: "Retirement Planning",
          copy:
            "Getting old sucks. We try to make it suck less by offering a 2% retirement match for employees who take advantage of our company’s 401K investment plan."
        },
        {
          title: "Growth",
          copy:
            "We want you to develop and learn. Every employee has the opportunity to grow in their role(s) at Data Concepts through hands-on experience, paid learning and workshops."
        },
        {
          title: "Flexible Hours",
          copy:
            "As a consultancy built on creativity and technology, we want you at your best. That's why we work remotely on select days and even adjust our hours depending on life's impromptu moments."
        },
        {
          title: "Paid Time Off",
          copy:
            "It’s important to relax and recharge. We offer flexible, paid vacation so you can work on that tan. Not to mention team-wide ‘Happy DC Days' where food and fun are on us."
        },
        {
          title: "Food & Drink",
          copy:
            "The way to happy employees is often through their stomach. We keep our kitchen stocked with drink and snack selections as well as craft coffee to keep you going."
        },
        {
          title: "Irresistible Culture",
          copy:
            "At the risk of sounding cliche, we fight for culture at every turn. Come and enjoy our WEDNESDAY BAGEL tradition. Or, join us for happy hour at our favorite craft beer spots."
        },
        {
          title: "Compensation",
          copy:
            "We value the members of our team, and pay competitive wages based on position and experience."
        }
      ]
    };
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
