<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Master Data Management"
        title="Inconsistent Duplicated Data - Calling MDM!!"
        summary="In the enterprise there are several systems managing the same data; the role of MDM is to centralize the data management to only one master copy of the data item which is then synchronized to all applications using the data."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section>
        <div class="container">
          <Spacer/>
          <SubSection
            class="subsection-padding"
            title="What is master data management?"
            content="Master data management (MDM) is a comprehensive method to define and manage an organization’s critical data. It provides a single, trusted view of data across the enterprise, agile self-service access, analytical graph-based exploration, governance and a user-friendly dashboard."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Master Data Management"
            content="Master Data Management (MDM) represents a set of tools and processes used by an enterprise to consistently manage their non-transactional data. MDM is usually applied to entities like Customer, Client, Product, Account and internal reference data. MDM also enables easy maintenance of data lineage and history for audit purposes."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Issues"
            content="In the enterprise there are several systems managing the same data; the role of MDM is to centralize the data management to only one master copy of the data item which is then synchronized to all applications using the data. Using this approach, when referring to (for example) a customer within the enterprise, all systems are referring to the same customer. There are basically two reasons why there are duplicated data which are inconsistent:"
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="1."
            content="The production systems within an enterprise, when implemented, have not been designed to be a part of larger set of production systems with which they should cooperate. Therefore, each system manages data on its own."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="2."
            content="The branches or departments of the company exist on their own without close cooperation with other departments. For example, the mortgage department deals with customers and manages the mortgage contracts. While the marketing department plans a promotion on mortgages. If the two departments do not cooperate (share the data), the marketing department may offer a mortgage to a customer who already has a mortgage. This is both a waste of money on the promotion as well as annoying to the customer."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="3."
            content="Company acquisitions or mergers are another example when an enterprise gets several parallel systems managing similar and sometimes overlapping data."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Solutions"
            content="To handle the issues mentioned above, the common baseline for Master Data Management solutions comprises the following processes:"
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="1."
            content=" - the 'system of record' needs to be identified first. If the same record is stored in multiple systems, the system which holds the most relevant copy (most valid, actual, or complete) of that record is referred to as a 'system of record'. "
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="2."
            content="Data collection - the data needs to be collected from various sources as some sources may attach a new piece of information, while dropping pieces which they are not interested in."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="3."
            content="Transformation - the transformation step takes place both during the input, while data are converted into a format for MDM processing, as well as on the output when distributing the master records back to the particular systems and applications."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="4."
            content="Data consolidation - the records from various systems which represent the same physical entity are consolidated into one record - a master record. The record is assigned a version number to enable a mechanism to check which version of record is being used in particular systems."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="5."
            content="Data deduplication - often there are separate records in the company's systems, which in fact identify the same customer. For example, the bank may have a record identifying a customer while the bank's insurance subsidiary or department maintains a separate database of customers having a different record for the same customer. It is vital that these two records are deduplicated and maintained as one master record."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="6."
            content="Error detection - based on the rules and metrics, the incomplete records or records containing inconsistent data should be identified and sent to their respective owners before publishing them to all the other applications. Providing erroneous data may compromise credibility of the company's MDM."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="7."
            content="Data correction - related to error detection, this step notifies the owner of the data record that there is a need to review the record manually."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="8."
            content="Data distribution/synchronization - the master records are distributed to the systems in the enterprise. The goal is that all the systems are using the same version of the record as soon as possible after the publication of the new record."
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(160deg) saturate(6)
  background-image: url(/insight/capital-one.jpg)
</style>
