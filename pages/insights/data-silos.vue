<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Data Strategy"
        title="Data Silos"
        summary="Let’s discuss the importance of Data Silos."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="padded-bottom">
        <div class="container">
          <Spacer/>
          <SubSection
            title="What’s a Data Silo?"
            content="Data silos are separate databases or sets of data files that inhibit productivity because employees are unable to get a 360 degree view of all the data. This can lead to interruptions in service delivery, decisions based on bad data and more. And, it is also difficult and expensive to pull the data together from silos because of the limitations of the approaches that must be used to integrate it, such as ETL and RDBMS."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="State agencies that run multi-million-dollar programs for the vulnerable populations who rely on them are at risk for not being able to assist these people due to flawed data stuck in silos. Let’s explore the impact of data silos on departments and why they’re a problem."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="How Do Data Silos Affect Departments?"
            content="Data silos impact the very heart of an agency’s business:"
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="1."
            content="Finance – If important factors are left out when calculating the budget, the financial picture is incomplete. Data silos are often polluted with outdated and even corrupt data, leaving companies to make decisions based on incorrect information."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="2."
            content="IT – Poorly organized data that is buried in data silos can hinder the resources of IT departments. Specific applications for data access mean one department may not have access to information in another, limiting the flow of information and bogging down IT. Additionally, some software applications used to store data are not designed to make data easily actionable."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="3."
            content="HR – Data silos can deliver inaccurate measures of efficiency and dehumanize profiles and accomplishments. The incomplete statistics that data silos provide can also disguise employee problems."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="4."
            content="Culture – As departments continue to segregate data and work within their own teams, the culture itself can become siloed as opposed to cohesive. Moving away from data silos can mean greater data transparency between departments."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="5."
            content="Service Delivery – State agency teams require access to relevant data—but the data is often stuck in silos, whereby separate departments are unable to see information across the entire enterprise landscape. For this reason, the flow of data between the teams becomes stagnant and cluttered, and the data itself may be inaccurate. This can negatively impact service delivery to populations who rely on them."
          ></SubSection>
          <SubSection
            title="Why Are Data Silos Problematic?"
            content="Data silos create new challenges – The high cost and long length of time it takes to integrate data from silos via ETL, for example, create new challenges for agencies. There is a lot of work and expense to set up, use and manage ETL tools and database connections. Once the tool is set up, there’s even more work to gather the data sources together, do all the data modeling and manage the changes that occur throughout the process."
          ></SubSection>
          <SubSection
            content="Data silos inhibit productivity – Wasted resources and unproductive results occur when multiple teams store the same data. Costly storage space is eaten up by repetitive data storage. Additionally, by the time each department has accessed the most updated data, and analyzed and shared it among departments, the usefulness of the data may have evaporated."
          ></SubSection>
          <SubSection
            content="Data silos decrease data quality – Credible data that is stored in a data silo can become less useful when employees are not seeing the data as a whole. The full value of that data is not accessible and therefore its effectiveness is diminished. The isolated data stored in silos can be costly to extract and apply. Current data also can be overwritten by outdated data if the content is not stored properly or it is stored in multiple locations."
          ></SubSection>
          <SubSection
            content="Data silos impact proper analysis – Data analysis is the key to improving performance and efficiency, but the biggest obstacle is gaining access to the data itself. Simply analyzing only the data that is easily accessed leaves a trail of inaccuracy and produces lack of the true insight."
          ></SubSection>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Spacer from "../../components/random/Spacer.vue";
import Header from "../../components/insight/Header.vue";
import SubSection from "../../components/insight/SubSection.vue";

export default {
  components: {
    Spacer,
    Header,
    SubSection
  }
};
</script>


<style lang="sass" scoped>

.insight-image
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(120deg) saturate(6)
  background-image: url(/insight/balancing.jpg)

</style>
