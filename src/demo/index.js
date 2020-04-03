import React from "react"
import Loadable from "react-loadable"

const LoadableDemo = Loadable({
  loader: () => import("../components/demo"),
  loading: () => <span>Loading...</span>,
})

const Demo = () => (
  <>
    <LoadableDemo />
  </>
)

export default Demo
