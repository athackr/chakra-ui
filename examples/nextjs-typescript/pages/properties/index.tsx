import { Heading, Wrap, WrapItem } from "@hackr/chakra-ui-core"
import { Layout } from "../../components/Layout"
import { properties } from "../../utils/sample-data"
import { PropertySummary } from "../../components/PropertySummary"
import { NextChakraLink } from "../../components/NextChakraLink"
import { Chakra } from "../../Chakra"

interface PropertiesProps {
  cookies?: string
}

const PropertiesPage = ({ cookies }: PropertiesProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Next.js + TypeScript example | View properties">
      <Heading mb={4}>Available this weekend</Heading>
      <Wrap>
        {properties.map((property) => (
          <WrapItem key={property.id}>
            <NextChakraLink
              href="/properties/[id]"
              as={`/properties/${property.id}`}
            >
              <PropertySummary property={property} />
            </NextChakraLink>
          </WrapItem>
        ))}
      </Wrap>
    </Layout>
  </Chakra>
)

export default PropertiesPage
export { getServerSideProps } from "../../Chakra"
