<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Data Governance"
        title="What is Data Governance?"
        summary="Data Governance (DG) is the overall management of the availability, usability, integrity and security of data used in an enterprise."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="padded-bottom">
        <div class="container">
          <Spacer/>
          <SubSection
            title="What is Data Governance?"
            content="Data Governance (DG) is the overall management of the availability, usability, integrity and security of data used in an enterprise. A sound data governance program includes a governing body or council, a defined set of procedures and a plan to execute those procedures."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="Businesses benefit from data governance because it ensures data is consistent and trustworthy. This is critical as more organizations rely on data to make business decisions, optimize operations, create new products and services, and improve profitability."
          ></SubSection>
          <SubSection
            title="Data Governance Implementation"
            content="The initial step in implementing a data governance framework involves defining the owners or custodians of the data assets in the enterprise. This role is called data stewardship."
          ></SubSection>
          <SubSection
            content="Processes must then be defined to effectively cover how the data will be stored, archived, backed up and protected from mishaps, theft or attacks. A set of standards and procedures must be developed that defines how the data is to be used by authorized personnel. Moreover, a set of controls and audit procedures must be put into place that ensures ongoing compliance with internal data policies and external government regulations, and that guarantees data is used in a consistent manner across multiple enterprise applications."
          ></SubSection>
          <SubSection
            content="Once an overarching strategy is defined and data owners and custodians are identified, data governance teams are often formed to implement policies and procedures for handling data. These teams can comprise business managers, data managers and staff, as well as end users familiar with relevant data domains within the organization. Associations dedicated to promoting best practices in such data governance processes include the Data Governance Institute, the Data Management Association (DAMA) and the Data Governance Professionals Organization.."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="Often, the early steps in data governance efforts can be the most difficult, as it is characteristic that different parts of an organization have diverging views of key enterprise data entities -- such as customer or product; these differences must effectively be resolved as part of the data governance process. To the extent that data governance may impose strictures on how data is handled, it can become controversial in organizations."
          ></SubSection>
          <SubSection
            title="Data Stewardship"
            content="An essential trait of the data steward is to be accountable for various portions of the data. The major objective of such data governance is to assure data quality in terms of accuracy, accessibility, consistency, completeness and updating."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="Teams of data stewards typically are formed to guide actual data governance implementations. These teams may include database administrators, business analysts and business personnel familiar with specific aspects of data within the organization. Data stewards work with individuals positioned in the overall data lifecycle to help ensure data use conforms to a company's data governance policies."
          ></SubSection>
          <SubSection
            title="Data Quality"
            content="Data quality is the driving force behind most data governance activities. Accuracy, completeness and consistency across data sources are the crucial hallmarks of successful initiatives."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="Data scrubbing, also known as data cleansing, is a common element in the data quality initiative, as it identifies, correlates and removes duplicated instances of the same data points. Data scrubbing accounts for the various ways in which, for example, the same customer or product may be described. Data editors, data mining tools, data differencing utilities, data linking tools, as well as version control, workflow and project management systems are included among software types that help organizations attain better data quality."
          ></SubSection>
          <SubSection
            title="Master Data Management"
            content="Data governance touches on nearly every aspect of data management, but one area of data management very closely associated with data governance processes is master data management (MDM). This is a discipline that establishes a master reference to ensure consistent use of data across large organizations."
          ></SubSection>
          <SubSection
            content="Metadata repositories, which hold data about data, are often used in establishing cross-group reference data in MDM programs. Product and customer data is a major emphasis of MDM systems. As with data governance generally, master data management projects can also encounter controversy within organizations, as different product groups or lines of business in the company promote different views on how to best present data."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="The purview of master data management expanded as corporate computing came to include much more externally generated data, often collected via the web or the cloud. Much of this data is unstructured and different in nature from the structured relational data that was traditionally the focus of MDM. That is one of the reasons that some MDM tools have begun to utilize graph data stores that support descriptions of more complex data interrelationships. Continuing advances in big data and a general flattening of corporate organization structure have led to increasing emphasis on flexible approaches to governance that support incremental implementations over big bang, waterfall-style projects."
          ></SubSection>
          <SubSection
            title="Data Governance Use Cases"
            content="Data governance is a particularly important component of mergers and acquisitions, business process management, legacy modernization, financial and regulatory compliance, credit risk management, analytics, business intelligence applications, data warehouses, and data lakes"
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(290deg) saturate(6)
  background-image: url(/insight/entry.jpg)

</style>
