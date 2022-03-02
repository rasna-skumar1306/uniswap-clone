import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'kq8h4x8g',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sknSKfgSYGf0Fc1PZo52xP21ozZF5YszugMYHE5l4zJ2cfuWmrxDv1EodjwUklY8gDXgBJX6ZrQ9tysgrZNuHeuhjsQVsXJVTF3EMMcZINyoN46InaIJ9hWeANVbzJcXpaEsjtJQhcMkeLRujWfP49qpFIuJYQTXQ1wEc1X0WJeIwpSorwHj',
  useCdn: false,
})

export default client
