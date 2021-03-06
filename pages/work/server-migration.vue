<template>
  <div class="__page-root">
    <Hero title="Virginia State Police" kicker="WebSphere Server Migration.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Data Concepts’ client is the predominant statewide Law Enforcement Agency for the Commonwealth of Virginia."
      >
        <Role>
          <li>Java</li>
          <li>Modernization</li>
          <li>Architecture Development</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="The client had 14 critical Enterprise Java applications running on WebSphere 6.1 ND with Java 1.5, Java EE 1.4, Spring 2.5 and iBatis. The inter-application communication was achieved by JMS and Soap Webservices. The existing Production environment consisted of Vertical two node WebSphere 6.1 ND setup on two physical Fujitsu M5000 running Solaris 10. This infrastructure was designed almost 10 years prior and the business needs had evolved. Internet Security and Data Integrity have become critical. There was an increasing demand to implement functionalities that required new technology stack and emerging frameworks requiring Java 1.7 and J2EE 1.6 specification. IBM had stopped supporting WebSphere 6.1 ND version. which made it more challenging to manage the current applications. This created an urgent need to upgrade the architecture to be robust, scalable and up-to-date to meet business needs."
      />

      <SolutionHeader content="modernization of a legacy system"/>

      <Solution>
        <p>Keeping the clients requirements in mind and constraints related to the current architecture being used, Data Concepts implemented the following solution:</p>
        <ul class="pseudo">
          <li>- To mitigate scalability issues, Data Concepts migrated the web applications to a clustered WebSphere v8.5 ND environment.</li>
          <li>- For a more robust and secure database to tackle demanding database workloads, migrated the client from Fujitsu M5000 to Oracle T52 database server.</li>
          <li>- To take advantage of a more clustered environment, Data Concepts set up the new server to use Solaris 11.2 which enabled features like Solaris LDOMs with horizontal clusters as compared to Solaris Zones.</li>
          <li>- To take advantage of latest frameworks and technology advancements, Data Concepts upgraded all the existing applications to Java 1.7 and J2EE 1.6.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="Data Concepts successfully migrated all the applications deployed in the new environment with minimum down time and no major delays. This upgrade resulted in the application performance improvement by 50%. These upgrades and changes enabled the client to take advantage of new features like session replication, XSLT 2.0 for XML transformation, Single Sign on for all the applications, Dyna Cache etc. The Jenkins integration immensely helped the client to stream line its web application deployment and prevented frequent deployment issues that were common before the migration."
      />
    </div>
  </div>
</template>

<script>
import Hero from "../../components/hero/Hero.vue";
import Summary from "../../components/work/Summary.vue";
import Challenge from "../../components/work/Challenge.vue";
import Role from "../../components/work/Role.vue";
import SolutionHeader from "../../components/work/SolutionHeader.vue";
import Solution from "../../components/work/Solution.vue";
import Outcome from "../../components/work/Outcome.vue";

export default {
  layout: "light",
  components: {
    Hero,
    Summary,
    Challenge,
    Role,
    SolutionHeader,
    Solution,
    Outcome
  },
  data() {
    return {
      color: "#EF4C23"
    };
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/work/server-migration.jpg)
  background-position: center

</style>