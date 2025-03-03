export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const JobsPartsFragmentDoc = gql`
    fragment JobsParts on Jobs {
  __typename
  published
  layout
  slug
  title
  description
  image_small
  image
  redirect_from
  body
}
    `;
export const PortfolioPartsFragmentDoc = gql`
    fragment PortfolioParts on Portfolio {
  __typename
  published
  layout
  theme
  slug
  title
  description
  project_url
  client
  project_date
  team_size
  lines_of_code
  technology_tags
  industry_vertical_tags
  service_tags
  body
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  published
  layout
  title
  permalink
  categories
  blog_categories
  author
  description
  image_small
  image
  content_sidebar
  time
  redirect_from
  date_published
  updated_at
  body
  is_blog
}
    `;
export const ServicesPartsFragmentDoc = gql`
    fragment ServicesParts on Services {
  __typename
  published
  layout
  title
  service_index_description
  subtitle
  description
  hero_cta_label
  slug
  redirect_from
  section_1_title
  section_1_list {
    __typename
    title
    text
  }
  section_2_title
  section_2_list {
    __typename
    title
    text
  }
  cta_title
  cta_description
  cta_button_label
  calendar_modal_url
}
    `;
export const TechnologyPartsFragmentDoc = gql`
    fragment TechnologyParts on Technology {
  __typename
  published
  layout
  category
  type
  title
  subtitle
  description
  hero_cta_label
  listing_description
  slug
  image
  image_hero
  redirect_from
  body
}
    `;
export const JobsDocument = gql`
    query jobs($relativePath: String!) {
  jobs(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...JobsParts
  }
}
    ${JobsPartsFragmentDoc}`;
export const JobsConnectionDocument = gql`
    query jobsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: JobsFilter) {
  jobsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...JobsParts
      }
    }
  }
}
    ${JobsPartsFragmentDoc}`;
export const PortfolioDocument = gql`
    query portfolio($relativePath: String!) {
  portfolio(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PortfolioParts
  }
}
    ${PortfolioPartsFragmentDoc}`;
export const PortfolioConnectionDocument = gql`
    query portfolioConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PortfolioFilter) {
  portfolioConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PortfolioParts
      }
    }
  }
}
    ${PortfolioPartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const ServicesDocument = gql`
    query services($relativePath: String!) {
  services(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ServicesParts
  }
}
    ${ServicesPartsFragmentDoc}`;
export const ServicesConnectionDocument = gql`
    query servicesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ServicesFilter) {
  servicesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ServicesParts
      }
    }
  }
}
    ${ServicesPartsFragmentDoc}`;
export const TechnologyDocument = gql`
    query technology($relativePath: String!) {
  technology(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TechnologyParts
  }
}
    ${TechnologyPartsFragmentDoc}`;
export const TechnologyConnectionDocument = gql`
    query technologyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TechnologyFilter) {
  technologyConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TechnologyParts
      }
    }
  }
}
    ${TechnologyPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    jobs(variables, options) {
      return requester(JobsDocument, variables, options);
    },
    jobsConnection(variables, options) {
      return requester(JobsConnectionDocument, variables, options);
    },
    portfolio(variables, options) {
      return requester(PortfolioDocument, variables, options);
    },
    portfolioConnection(variables, options) {
      return requester(PortfolioConnectionDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    },
    services(variables, options) {
      return requester(ServicesDocument, variables, options);
    },
    servicesConnection(variables, options) {
      return requester(ServicesConnectionDocument, variables, options);
    },
    technology(variables, options) {
      return requester(TechnologyDocument, variables, options);
    },
    technologyConnection(variables, options) {
      return requester(TechnologyConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
