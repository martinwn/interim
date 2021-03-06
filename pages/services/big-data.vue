<template>
  <div class="__page-root">
    <Hero title="Big Data" kicker="Empower your organization with data-driven insights.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Big data analytics holds great potential for organizations that want to increase revenue and reduce cost. With big data you can go beyond traditional descriptive analytics and incorporate predictive and prescriptive analysis, which will help drive better decision-making. We help you rapidly deploy big data analytics solutions that integrate, store, manage, and protect your data."
      />

      <Services subtitle="services">
        <SubService
          title="Identify Your Use Cases"
          content="Understanding your Big Data and Analytics use cases can be a challenge. Identifying the first step from a business and technology perspective can be overwhelming. Let us help you solve these challenges and get the most out of your Big Data environment."
        />
        <SubService
          title="Integrate"
          content="Analytics requires having availability to all data. This is possible by removing silos and consolidating all your data into a Data Lake. Incorporating diverse sources and unifying data types gives you richer insights that will drive better business outcomes."
        />
        <SubService
          title="Analyze"
          content="Enhance your competitive edge with data driven decisions. Empower your end users with accelerated queries and reporting with anywhere, anytime, all-data analytics. Enable your organization with self-service analytics capabilities."
        />
        <SubService
          title="Eliminate Silos & Simplify"
          content="Streamline to an enterprise-proven, scale-out platform for unstructured and structured data. Using a single volume is easy to manage without data migrations."
        />
        <SubService
          title="Optimize Storage"
          content="With flexible deployment and protection capabilities, expand seamlessly to the cloud while being transparent to users and applications."
        />
        <SubService
          title="Use Analytics to Gain Insight"
          content="Leverage Big Data Analytics & enable in-place analytics to discover actionable insights at the speed your business decisions require."
        />
      </Services>

      <AsideRight
        title="Big Data Opportunities"
        content="The IT department obviously plays a critical role in the organization’s efforts to effectively harness all of the potential of Big Data. By implementing a data analytics architecture, you enable business units to collaborate, breaking boundaries and eliminating duplication of efforts. In this process of transforming an organization’s information structure, the IT department gains stature as an expert consultant and trusted provider. United in purpose with the business side, you form a partnership that fosters success for your organization."
      />

      <Definition subtitle="definition">
        <SubDefinition
          title="Big Data"
          content="Due to the advances in technology, the definition of Big Data has changed over the years. Yet, one thing that remains the same is that the amount of data is continuously growing at an extremely rapid rate. All data, in any form, that is used for gaining insight and generating value is considered Big Data."
        />
        <SubDefinition
          title="Data Lake"
          content="A data lake is scale-out storage for your Big Data. It allows for Big Data accessibility– via traditional and next-generation access methods– to enable in-place analytics. With a Data Lake, you can keep more data and keep it longer, making it essential for true Hadoop environments."
        >
          <router-link class="regular-link" to="/insights">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          title="Analytics"
          content="Analytics is the practice of applying modern analytics software tools across data of all types, including unstructured, semi-structured, and structured data; as well as real-time/streaming and batch. At Data Concepts, we use Big Data Analytics is to discover insights and irregularities, and to enhance the understanding of business performance and customer behavior. These analytics-driven insights can be used to shape business outcomes, improve competitive advantage, enhance financial decisions and develop more concise projections for our Clients."
        />
      </Definition>

      <AsideLeft
        title="Big Data Transforms Your Business"
        content="Empower your organization with deeper insights and enhanced data-driven decision-making by using the right infrastructure for the right data. With solutions that integrate, store, manage, and protect your data, you can rapidly deploy Big Data analytics applications."
      />

      <Capabilities subtitle="capabilities">
        <SubCapability
          title="Actionable Insights"
          content="Develop actionable insights and help identify and tackle problems. Engage data to provide powerful trends and insights."
        >
          <ul class="subcapability-list pseudo">
            <li class="subcapability-list-item">Synthesis</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Insights</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Analysis</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Reporting</li>
          </ul>
        </SubCapability>
        <SubCapability
          title="Secure Architecture"
          content="Engineer secure data architectures, harness data from all sources, and synthesize it for analysis and action."
        >
          <ul class="subcapability-list pseudo">
            <li class="subcapability-list-item">Data Architecture</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Data Engineering</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Mirroring</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Data Security</li>
          </ul>
        </SubCapability>
        <SubCapability
          title="Intelligence Development"
          content="Use AI and machine-learning to create intelligent customer experiences, tools, and services for your business and its customers."
        >
          <ul class="subcapability-list pseudo">
            <li class="subcapability-list-item">Artificial Intelligence</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Machine Learning</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Feedback Looping</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Optimization</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Intelligent CX</li>
          </ul>
        </SubCapability>
        <SubCapability
          title="Dynamic Visualization"
          content="Powerful, real-time and dynamic visualization tools give us a new understanding of how your business runs."
        >
          <ul class="subcapability-list pseudo">
            <li class="subcapability-list-item">Data Visualization</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Data Analysis</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Modeling</li>
          </ul>
        </SubCapability>
      </Capabilities>

      <AdditionalServices
        subtitle="additional"
        title="Big Data Development and Big Data Consulting Services."
        paragraphOne="We addresses the challenges of collecting, storing and processing ever-growing volumes of Big Data on an industry scale. We deliver Big Data consulting and development services tailored to businesses in the healthcare, Retail, public safety, judiciary, and more."
        paragraphTwo="Our Big Data teams make data science serve the enterprises striving to harness complex data processing operations. What you get is powerful insights derived from the vastness of mission-critical information, which makes your daily decision-making fact-based and agile."
      >
        <SubService
          title="Data Governance"
          content="The quality of data is paramount. We ensure that all the data on your hands is complete, clean, and de-duplicated. Moreover, we set up rules and policies for proactive governance and quality verification to keep that data up to your standards at all times."
        />
        <SubService
          title="Big Data Analytics"
          content="With our advanced Business Intelligence expertise, we transform vast amounts of unstructured data into visualized, customizable reports enhanced with interactive dashboards that make analytics manageable even for non-tech users."
        />
        <SubService
          title="Customer MDM"
          content="Delivering great customer experiences by having a unified, all-round view of your customers. We enable customer master data management across your enterprise applications, such as CRM, ERP, or accounting, and ensure accuracy."
        />
        <SubService
          title="Big Data Strategy"
          content="Our experts will help you evaluate your current capabilities and take them further with a strategy to reveal the true value of Big Data for your business goals."
        />
        <SubService
          title="Big Data Integration"
          content="To deliver a real-time and complete picture of your data assets, we connect data, systems and processes into a single manageable silo."
        />
        <SubService
          title="Data Mining and Aggregation"
          content="We help you embrace the variety of Big Data sources by bringing them together on a holistic map so that your enterprise can look for the right answers."
        />
      </AdditionalServices>

      <InsightHighlight
        title="The Plan to Move to Big Data."
        imgsrc="/insight/lights-7.jpg"
        link="/insights/big-data-plan"
      />

      <Related>
        <InsightContainer
          data-aos="fade-up"
          title="A Quick Peek in to  Data Strategy"
          summary="Every business and organisation has its own unique set of goals, KPIs and targets, and we believe that everything that we do should be devised, planned and executed with these objectives in mind."
          category="Data Strategy"
          link="/insights/quick-peek"
          imgsrc="/insight/dance-2.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/data-mining"
          category="Big Data"
          title="Extracting Actionable Insights from Data"
          summary="Data mining is the extraction of actionable insights from data."
          imgsrc="/insight/entry.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/analytics-is-popular"
          category="Data & Analytics"
          title="The Popularity of Analytics"
          summary="Ten imperatives for successfully developing an analytics capability."
          imgsrc="/insight/model.jpg"
        />
      </Related>

      <Subscribe/>
      <HireUsFooter/>
    </div>
  </div>
</template>

<script>
import Hero from "../../components/hero/Hero.vue";
import InsightContainer from "../../components/insight/InsightContainer.vue";
import Promise from "../../components/service/Promise.vue";
import Services from "../../components/service/Services.vue";
import SubService from "../../components/service/SubService.vue";
import Definition from "../../components/service/Definition.vue";
import SubDefinition from "../../components/service/SubDefinition.vue";
import Capabilities from "../../components/service/Capabilities.vue";
import SubCapability from "../../components/service/SubCapability.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import Related from "../../components/service/Related.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import Subscribe from "../../components/form/Subscribe.vue";
import AdditionalServices from "../../components/service/AdditionalServices.vue";
import AsideRight from "../../components/service/AsideRight.vue";
import AsideLeft from "../../components/service/AsideLeft.vue";

export default {
  layout: "light",
  components: {
    Hero,
    SubService,
    Promise,
    Services,
    Definition,
    SubDefinition,
    Capabilities,
    SubCapability,
    InsightHighlight,
    Related,
    InsightContainer,
    HireUsFooter,
    AdditionalServices,
    AsideRight,
    AsideLeft,
    Subscribe
  }
};
</script>

<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/big-data.jpg)
  background-size: cover

</style>