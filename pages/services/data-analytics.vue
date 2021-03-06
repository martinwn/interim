<template>
  <div class="__page-root">
    <div class="sections">
      <Hero title="Data & Analytics" kicker="Accelerate decision-making with AI-powered analytics.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        subtitle="the promise"
        content="Our data analytics solutions deliver analytical and actionable insights to give you access to what your target market wants and needs."
      />

      <SectionDivider
        title="Predictive Analytics"
        content="We provide scalable and cutting-edge solutions to gain actionable insights into your existing data, processes, customers and markets. We start by understanding your datasets and then create a predictive model in order to empower you to make smarter decisions."
      />

      <Services subtitle="services">
        <SubService
          title="Dataset Understanding"
          content="Dataset understanding, improving data literacy, understanding data sets and data sources."
        />
        <SubService
          title="Identifying Patterns"
          content="Identifying patterns, trends, characteristics, inconsistencies, and outliers from datasets."
        />
        <SubService
          title="Building the Model"
          content="Building predictive models using historical data to generate future insights and forecast trends."
        />
        <SubService
          title="Data Distillation"
          content="Raw data collected from various sources is converted into smaller structured formats of actionable information. Refining data quality."
        />
        <SubService
          title="Evaluation"
          content="Evaluation of the predictive performance of the model on unseen data, and fine tuning the model to improve performance."
        />
        <SubService
          title="Deployment"
          content="Deployment using best practices to ensure smooth transactions of predictive models seamlessly into production."
        />
      </Services>

      <Advantages subtitle="p. a. Benefits">
        <ul data-aos="fade-up" class="advantages-list pseudo">
          <li class="advantages-list-item">Gain deeper insights into data</li>
          <div class="line"></div>
          <li class="advantages-list-item">Identify trends and patterns</li>
          <div class="line"></div>
          <li class="advantages-list-item">Predict behavior</li>
          <div class="line"></div>
          <li class="advantages-list-item">Understand customers better</li>
          <div class="line"></div>
          <li class="advantages-list-item">Boost business performance</li>
          <div class="line"></div>
          <li class="advantages-list-item">Drive strategic decision-making</li>
        </ul>
      </Advantages>

      <SectionDivider
        title="Deep Learning"
        content="Deep learning cloud service helps to not only reduce operating costs across the board but also process large volumes of data to derive insightful actions. The key highlight of our unique solution is to perform feature detection from massive amounts of unlabeled training data."
      />

      <Services subtitle="services">
        <SubService
          title="Gathering And Training Data"
          content="Gathering unlabeled training data to make concise conclusions."
        />
        <SubService
          title="Parsing Data"
          content="Generating actionable results with data processing models when solving data science tasks."
        />
        <SubService
          title="Choosing And Training Models"
          content="Training neural network models to automate the learning of complex representations of data."
        />
        <SubService
          title="Labeling Data"
          content="Labeling large amounts of data and determining their matching characteristics."
        />
      </Services>

      <Spacer/>

      <SectionDivider
        title="Cognitive"
        content="Services include computer vision, machine learning, natural language processing, speech recognition, text analytics and automation. Using cognitive services helps organizations in generating insights to decrease costs, enhance efficiency, boost revenue and improve customer support."
      />

      <Services subtitle="services">
        <SubService
          title="Face API"
          content="Find, analyze, organize and tag faces in photos based on age, emotion, gender, & smile."
        />
        <SubService
          title="Emotion API"
          content="Personalize user experiences by analyzing faces to detect a range of emotion."
        />
        <SubService
          title="Visual Recognition API"
          content="Quickly tag, classify and train visual content using ML and Natural Language Classification features."
        />
      </Services>

      <InsightHighlight
        imgsrc="/insight/model.jpg"
        link="/insights/analytics-power"
        title="The Popularity of Analytics"
      />

      <Related>
        <InsightContainer
          data-aos="fade-up"
          link="/insights/analytics-power"
          category="Artificial Intelligence"
          title="Harness the Power of Analytics & AI to Predict"
          summary="Using your data to realize the benefits of artificial intelligence (AI) sounds good, right? Now you just need to work out how to do it."
          imgsrc="/insight/lights-15.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/analytics-is-popular"
          category="Data & Analytics"
          title="The Popularity of Analytics"
          summary="Ten imperatives for successfully developing an analytics capability."
          imgsrc="/insight/model.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/data-governance-path"
          category="Data Governance"
          title="Let's Put You on the Path to Data Governance Excellence"
          summary="In the rush to get exciting, advanced analytics projects off the ground, don't overlook the importance of data governance. Data governance practices can sink any analytics initiative before it really has a chance to take shape."
          imgsrc="/insight/capital-one.jpg"
        />
      </Related>

      <Subscribe/>
      <HireUsFooter/>
    </div>
  </div>
</template>

<script>
import Spacer from "../../components/service/Spacer.vue";
import Hero from "../../components/hero/Hero.vue";
import Promise from "../../components/service/Promise.vue";
import Services from "../../components/service/Services.vue";
import SubService from "../../components/service/SubService.vue";
import Definition from "../../components/service/Definition.vue";
import SubDefinition from "../../components/service/SubDefinition.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import Related from "../../components/service/Related.vue";
import InsightContainer from "../../components/insight/InsightContainer.vue";
import SectionDivider from "../../components/service/SectionDivider.vue";
import Advantages from "../../components/service/Advantages.vue";
import Subscribe from "../../components/form/Subscribe.vue";

export default {
  layout: "light",
  components: {
    Spacer,
    Hero,
    SubService,
    Promise,
    Services,
    Definition,
    SubDefinition,
    InsightHighlight,
    HireUsFooter,
    Related,
    InsightContainer,
    SectionDivider,
    Advantages,
    Subscribe
  }
};
</script>

<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/data-analytics.jpg)

</style>