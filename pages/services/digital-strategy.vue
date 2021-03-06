<template>
  <div class="__page-root">
    <Hero title="Digital Strategy" kicker="Reinventing for a digital future.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Enterprises today have access to unprecedented volumes of data, originating from social media, connected devices, as well as transactional data and enterprise data sets. With smart strategies and the right Big Data solutions, they can convert this huge treasure-trove of data into a core strategic asset. Digital is evolving to connect everyone and everything, to digitize transactions and interactions, to become more contextual, more predictive, more cognitive. That puts Insights & Data at the heart of Digital. At Data Concepts, we are Delivering Insights at the point of action."
      />

      <Services subtitle="services">
        <SubService title="d" content="d"/>
        <SubService title="d" content="d"/>
        <SubService title="d" content="d"/>
      </Services>

      <Definition subtitle="roadmap">
        <SubDefinition
          title="Elevating Agility to C-Suite"
          content="Elevating agility to a strategic C-suite objective fosters a cultural change that ripples through the whole organization. It changes the mindset from thinking of projects as discreet events to thinking of them as part of a greater journey toward a more responsive and efficient organization. Organizations that adopt agility as a core strategic tenet worry about the basic underlying assets that allow them to iterate and learn faster. They invest in enabling capabilities that many organizations see as high cost with uncertain returns. Agile organizations realize these investments un-bottleneck everything they do, and create byproducts from ongoing projects that make future change faster and easier."
        ></SubDefinition>

        <SubDefinition
          title="Understand and Explore Digital Possibilities"
          content="In this phase, our team of consultants and subject matter experts help you explore and understand the digital possibilities in your business environment. To achieve effective digital outcomes, you need a macro view of your business landscape. We achieve this by reviewing your business models, customer preferences, your employees and their processes, your partner ecosystem and your competitors’ digital initiatives. With this in-depth view in hand,we help you evaluate the impact of digital initiatives and how they can be strategically used to increase your overall business value. We then isolate and define the digital initiatives that are best aligned to your unique business strategies and desired outcomes."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Understand the macro business landscape</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Evaluate current-state business functions and delivery models</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Identify candidates for digital use cases</li>
          </ul>
        </SubDefinition>

        <SubDefinition
          title="Digital Experience Journey Mapping"
          content="This phase explores the art of the possible. It dives deeper into the digital transformation process by helping you define the strategies required for you to implement initiatives and the appropriate key performance indicators (KPIs) to measure success. Digital experience journey maps are created during this phase. Journey maps illustrate the impact revised processes will have on your organization internally and externally, detailing the new digital customer and employee experience from start to finish. For example, if a hospital wants to enhance the patient experience, we can help them visualize a digital future state by building an end-to-end customer journey map."
        >
          <ul class="example-work-list">
            <li
              class="example-work-list-item"
            >Define a future-state vision and the appropriate KPIs for your digital initiatives</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Assess the impact of digital through journey maps Determine key digital initiatives</li>
          </ul>
        </SubDefinition>

        <SubDefinition
          title="Prototype and Measure the Full Solution"
          content="During this phase, we help you further evaluate digital initiatives by building out detailed architectural prototypes. These mock-ups take into account relevant business processes, people management and technology requirements, as well as potential ROI. Each prototype is supported by examples of digital initiatives in action to show you the true value of the proposed solution. In this phase, a hospital’s new digitally- enabled patient experience translates into practical solutions."
        >
          <ul class="example-work-list">
            <li
              class="example-work-list-item"
            >Prototype digital ideas and evaluate real-world impact</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Document required digital technology architecture</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Advance the best course of action based on ROI</li>
          </ul>
        </SubDefinition>

        <SubDefinition
          title="Plan and Prepare for Implementation"
          content="In this phase, we assess and prioritize your projects by how much impact each transformation will have on your business operations. This helps inform business continuity and allocate your resources for executing digital programs across your enterprise. We then define the policies and governance mechanisms that will ensure success and incorporate any risk and compliance measures. Our team of experts will also help you determine what new skills will be required and show you how to develop training programs to get your staff up to speed."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Identify the right resources and plan for execution</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Define policies and governance mechanisms</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Establish the path to achieve successful digital initiatives</li>
          </ul>
        </SubDefinition>

        <SubDefinition
          title="Execute the Vision: Analytics, Mobility & Solutions"
          content="During the final phase, we help you execute your digital vision, backed by our proven experience implementing digital technologies across the globe. Our experts can also guide your staff in project management tasks and help you execute your new initiatives."
        ></SubDefinition>
      </Definition>

      <InsightHighlight
        title="The 'Culture Step': for Getting a Digital Transformation on Track"
        imgsrc="/insight/art.jpg"
        link="/insights/digital-culture"
      />

      <Related>
        <InsightContainer
          data-aos="fade-up"
          link="/insights/digital-transformation"
          category="Digital"
          title="Digital Transformation: Our Thoughts on Getting Started"
          summary="Our digital strategists and technologists are changing the way our clients think about, assemble, ship, and run digital services."
          imgsrc="/insight/lights.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/digital-culture"
          category="Digital"
          title="The 'Culture Step': for Getting a Digital Transformation on Track"
          summary="The hardest part of a successful digital transformation is the cultural piece."
          imgsrc="/insight/art.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/digital-landscape"
          category="Digital"
          title="The Modern Digital Landscape"
          summary="Consumers have become accustomed to smartphones, mobile applications and ubiquitous connectivity, demanding a better user experience in their daily interactions."
          imgsrc="/insight/graffiti-2.jpg"
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
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import Related from "../../components/service/Related.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import Subscribe from "../../components/form/Subscribe.vue";

export default {
  layout: "light",
  components: {
    Hero,
    SubService,
    Promise,
    Services,
    Definition,
    SubDefinition,
    InsightHighlight,
    Related,
    InsightContainer,
    HireUsFooter,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/digital-strategy.jpg)

</style>
