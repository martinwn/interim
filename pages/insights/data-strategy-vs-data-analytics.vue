<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Data Strategy"
        title="Data Strategy vs. Analytics Roadmap"
        summary="Let’s discuss the difference between data strategy and analytics roadmap."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="padded-bottom">
        <div class="container">
          <Spacer/>
          <SubSection
            class="subsection-padding"
            title="What’s a Data Strategy?"
            content="An initial and high-level look at an organization’s objectives for investing in analytics, a data strategy helps businesses get an understanding of how to leverage data and what sorts of opportunities it could provide.  At a more granular level, there are a number of components that are important to include in a data strategy, including the following:"
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="1."
            content="Opportunities that can be enabled by data and analytics."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="2."
            content="Data content (what data do you have already?)"
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="3."
            content="Quality and performance (how good is it?)"
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="4."
            content="Roles and responsibilities, ownership (who is going to handle what?)"
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="5."
            content="Data migration and integration  - will the data live in a data mart?"
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="6."
            content="Security, privacy and licensing."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="7."
            content="Organizational capability model and evolution."
          ></SubSection>
          <SubSection title="8." content="Internal communication of the strategy."></SubSection>
          <SubSection
            class="subsection-padding"
            content="These factors cumulatively give organizations a picture of what they want out of an investment in analytics.  Many of these desired outcomes tend to be similar across all manner of industries and company sizes which makes sense, because businesses typically want the same thing:  to learn why things are happening and determine how to optimize those things in order to increase revenue."
          ></SubSection>
          <SubSection
            title="What is an Analytics Roadmap?"
            content="An analytics roadmap is designed to translate the data strategy’s intent into a plan of action - something that outlines how to implement the strategy’s key initiatives.  Creating this kind of framework allows you to evaluate the potential value of each strategic initiative (as well as what the constraints would be) so you don’t end up squandering time and resource on the wrong projects."
          ></SubSection>
          <SubSection
            content="At a very practical level, the roadmap considers all of the different everyday activities that will need to occur in order to bring the data strategy to fruition, as well as the key milestones and dependencies you’ll need to keep in mind.  To give an example, your data strategy might say ‘We want to build internal capability.’  You have a goal, but you haven’t outlined how you’re going to get from here to there.  Your analytics roadmap would then determine what skills you need, what kinds of people you want to hire, what the timeframe is etc.  You’re breaking down goals into actionable bite-sized activities."
          ></SubSection>
          <SubSection
            content="One of the most important components of an analytics roadmap is determining the phasing of these various activities.  Rather than arbitrarily choosing a project to start on, you have to outline what needs to happen at what stage of the process in order to facilitate other activities down the road."
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
