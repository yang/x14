// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4mqFJekvji451KgKbegxWF
// Component: RZNeGN7lbo
import * as React from "react";
import __PlatformHead from "next/head";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Cc from "../../Cc"; // plasmic-import: t9-VfU8p_8/component
import Cccc from "../../Cccc"; // plasmic-import: MCCE7ESyYV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_untitled_project.module.css"; // plasmic-import: 4mqFJekvji451KgKbegxWF/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: RZNeGN7lbo/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <__PlatformHead>
        <title key="title">{""}</title>
      </__PlatformHead>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <Cc
            data-plasmic-name={"cc"}
            data-plasmic-override={overrides.cc}
            className={classNames("__wab_instance", sty.cc)}
          />

          <Cccc
            data-plasmic-name={"cccc"}
            data-plasmic-override={overrides.cccc}
            className={classNames("__wab_instance", sty.cccc)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "cc", "cccc"],
  cc: ["cc"],
  cccc: ["cccc"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cc: makeNodeComponent("cc"),
    cccc: makeNodeComponent("cccc"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
