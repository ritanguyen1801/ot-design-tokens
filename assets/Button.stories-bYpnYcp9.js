import{R as r}from"./index-C5e9SFkp.js";const ue=({size:e=16,color:n="currentColor"})=>r.createElement("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{flexShrink:0}},r.createElement("circle",{cx:"8",cy:"8",r:"6.5",stroke:n,strokeWidth:"1.5"}),r.createElement("circle",{cx:"8",cy:"8",r:"2.5",fill:n})),t={color:{bg:{brand:"#00ac8c",brandHover:"#008f76",subtle:"#f6f6f6",default:"#ffffff",disabled:"#e7e7e7"},text:{inverse:"#ffffff",brand:"#00ac8c",default:"#050505",disabled:"#6d6d6d"},border:{brand:"#00ac8c",strong:"#b0b0b0"}}};function me(e,n){const a=n==="Disable",s=n==="Hover";switch(e){case"Primary":return{background:a?t.color.bg.disabled:s?t.color.bg.brandHover:t.color.bg.brand,border:"1px solid transparent",color:a?t.color.text.disabled:t.color.text.inverse};case"Secondary color":return{background:"transparent",border:`1px solid ${a?t.color.border.strong:t.color.border.brand}`,color:a?t.color.text.disabled:t.color.text.brand};case"Tertiary":return{background:s?t.color.bg.subtle:t.color.bg.default,border:`1px solid ${s?t.color.bg.subtle:t.color.border.strong}`,color:a?t.color.text.disabled:t.color.text.default};case"Link color":return{background:"transparent",border:"1px solid transparent",color:a?t.color.text.disabled:t.color.text.brand};case"Link grey":default:return{background:"transparent",border:"1px solid transparent",color:a?t.color.text.disabled:t.color.text.default}}}function pe(e,n){const a=n==="Only";switch(e){case"Small":return{paddingTop:a?8:4,paddingBottom:a?8:4,paddingLeft:a?8:16,paddingRight:a?8:16,fontSize:16,lineHeight:"24px",iconSize:16,gap:8};case"Large":return{paddingTop:8,paddingBottom:8,paddingLeft:a?8:16,paddingRight:a?8:16,fontSize:20,lineHeight:"28px",iconSize:24,gap:8};case"Medium":default:return{paddingTop:8,paddingBottom:8,paddingLeft:a?8:16,paddingRight:a?8:16,fontSize:16,lineHeight:"24px",iconSize:20,gap:8}}}function i({label:e="Button",hierarchy:n="Primary",icon:a="False",size:s="Medium",state:D="Default",onClick:se,style:le={},...ce}){const x=D==="Disable",k=a==="Leading",z=a==="Only",v=me(n,D),o=pe(s,a),de={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:k?o.gap:0,paddingTop:o.paddingTop,paddingBottom:o.paddingBottom,paddingLeft:o.paddingLeft,paddingRight:o.paddingRight,fontFamily:"'Outfit', sans-serif",fontSize:o.fontSize,fontWeight:400,lineHeight:o.lineHeight,whiteSpace:"nowrap",cursor:x?"not-allowed":"pointer",boxSizing:"border-box",outline:"none",borderRadius:0,transition:"background 0.15s ease, color 0.15s ease, border-color 0.15s ease",...v,...le};return r.createElement("button",{style:de,disabled:x,onClick:x?void 0:se,"aria-label":z?e:void 0,...ce},(k||z)&&r.createElement(ue,{size:o.iconSize,color:v.color}),!z&&r.createElement("span",null,e))}i.__docgenInfo={description:`Button — design system button component.

Props:
  label      – button text (ignored when icon="Only")
  hierarchy  – "Primary" | "Secondary color" | "Tertiary" | "Link color" | "Link grey"
  icon       – "False" | "Leading" | "Only"
  size       – "Small" | "Medium" | "Large"
  state      – "Default" | "Hover" | "Disable"
  onClick    – click handler`,methods:[],displayName:"Button",props:{label:{defaultValue:{value:'"Button"',computed:!1},required:!1},hierarchy:{defaultValue:{value:'"Primary"',computed:!1},required:!1},icon:{defaultValue:{value:'"False"',computed:!1},required:!1},size:{defaultValue:{value:'"Medium"',computed:!1},required:!1},state:{defaultValue:{value:'"Default"',computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1}}};const fe={title:"Design System/Button",component:i,parameters:{layout:"centered",docs:{description:{component:"Design system button component. Supports 5 hierarchy levels, 3 sizes, icon variants, and 3 interaction states."}}},argTypes:{label:{control:"text",description:'Button label text (not shown when icon is "Only")'},hierarchy:{control:"select",options:["Primary","Secondary color","Tertiary","Link color","Link grey"],description:"Visual hierarchy / style variant"},icon:{control:"select",options:["False","Leading","Only"],description:"Icon placement"},size:{control:"select",options:["Small","Medium","Large"],description:"Button size"},state:{control:"select",options:["Default","Hover","Disable"],description:"Interaction state"},onClick:{action:"clicked"}}},l={args:{label:"Button",hierarchy:"Primary",icon:"False",size:"Medium",state:"Default"}},c={name:"All Hierarchies",render:()=>r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:32,background:"#f9fafb"}},["Primary","Secondary color","Tertiary","Link color","Link grey"].map(e=>r.createElement("div",{key:e,style:{display:"flex",alignItems:"center",gap:16}},r.createElement("span",{style:{width:140,fontSize:13,fontFamily:"'Outfit', sans-serif",color:"#6b7280",flexShrink:0}},e),r.createElement(i,{hierarchy:e,size:"Medium",icon:"False",state:"Default"}),r.createElement(i,{hierarchy:e,size:"Medium",icon:"Leading",state:"Default"}),r.createElement(i,{hierarchy:e,size:"Medium",icon:"Only",state:"Default"}))))},d={name:"All Sizes",render:()=>r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:32,background:"#f9fafb"}},["Small","Medium","Large"].map(e=>r.createElement("div",{key:e,style:{display:"flex",alignItems:"center",gap:16}},r.createElement("span",{style:{width:80,fontSize:13,fontFamily:"'Outfit', sans-serif",color:"#6b7280",flexShrink:0}},e),r.createElement(i,{hierarchy:"Primary",size:e,icon:"False",state:"Default"}),r.createElement(i,{hierarchy:"Primary",size:e,icon:"Leading",state:"Default"}),r.createElement(i,{hierarchy:"Primary",size:e,icon:"Only",state:"Default"}))))},u={name:"All States",render:()=>r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:32,padding:32,background:"#f9fafb"}},["Primary","Secondary color","Tertiary"].map(e=>r.createElement("div",{key:e},r.createElement("p",{style:{margin:"0 0 12px",fontSize:13,fontWeight:600,fontFamily:"'Outfit', sans-serif",color:"#374151",textTransform:"uppercase",letterSpacing:"0.05em"}},e),r.createElement("div",{style:{display:"flex",gap:16,alignItems:"center"}},["Default","Hover","Disable"].map(n=>r.createElement("div",{key:n,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6}},r.createElement(i,{hierarchy:e,size:"Medium",icon:"False",state:n}),r.createElement("span",{style:{fontSize:11,color:"#9ca3af",fontFamily:"'Outfit', sans-serif"}},n)))))))},m={args:{label:"Button",hierarchy:"Primary",size:"Medium",icon:"False",state:"Default"}},p={name:"Secondary Color",args:{label:"Button",hierarchy:"Secondary color",size:"Medium",icon:"False",state:"Default"}},y={args:{label:"Button",hierarchy:"Tertiary",size:"Medium",icon:"False",state:"Default"}},f={name:"Link Color",args:{label:"Button",hierarchy:"Link color",size:"Medium",icon:"False",state:"Default"}},g={name:"Link Grey",args:{label:"Button",hierarchy:"Link grey",size:"Medium",icon:"False",state:"Default"}},h={name:"With Leading Icon",args:{label:"Button",hierarchy:"Primary",size:"Medium",icon:"Leading",state:"Default"}},b={name:"Icon Only",args:{label:"Action",hierarchy:"Primary",size:"Medium",icon:"Only",state:"Default"}},S={args:{label:"Button",hierarchy:"Primary",size:"Medium",icon:"False",state:"Disable"}};var L,B,F;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Button",
    hierarchy: "Primary",
    icon: "False",
    size: "Medium",
    state: "Default"
  }
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var M,P,O;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "All Hierarchies",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    padding: 32,
    background: "#f9fafb"
  }}>
      {["Primary", "Secondary color", "Tertiary", "Link color", "Link grey"].map(h => <div key={h} style={{
      display: "flex",
      alignItems: "center",
      gap: 16
    }}>
          <span style={{
        width: 140,
        fontSize: 13,
        fontFamily: "'Outfit', sans-serif",
        color: "#6b7280",
        flexShrink: 0
      }}>
            {h}
          </span>
          <Button hierarchy={h} size="Medium" icon="False" state="Default" />
          <Button hierarchy={h} size="Medium" icon="Leading" state="Default" />
          <Button hierarchy={h} size="Medium" icon="Only" state="Default" />
        </div>)}
    </div>
}`,...(O=(P=c.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var E,I,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "All Sizes",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    padding: 32,
    background: "#f9fafb"
  }}>
      {["Small", "Medium", "Large"].map(s => <div key={s} style={{
      display: "flex",
      alignItems: "center",
      gap: 16
    }}>
          <span style={{
        width: 80,
        fontSize: 13,
        fontFamily: "'Outfit', sans-serif",
        color: "#6b7280",
        flexShrink: 0
      }}>
            {s}
          </span>
          <Button hierarchy="Primary" size={s} icon="False" state="Default" />
          <Button hierarchy="Primary" size={s} icon="Leading" state="Default" />
          <Button hierarchy="Primary" size={s} icon="Only" state="Default" />
        </div>)}
    </div>
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,H,A;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32,
    padding: 32,
    background: "#f9fafb"
  }}>
      {["Primary", "Secondary color", "Tertiary"].map(h => <div key={h}>
          <p style={{
        margin: "0 0 12px",
        fontSize: 13,
        fontWeight: 600,
        fontFamily: "'Outfit', sans-serif",
        color: "#374151",
        textTransform: "uppercase",
        letterSpacing: "0.05em"
      }}>
            {h}
          </p>
          <div style={{
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
            {["Default", "Hover", "Disable"].map(st => <div key={st} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        }}>
                <Button hierarchy={h} size="Medium" icon="False" state={st} />
                <span style={{
            fontSize: 11,
            color: "#9ca3af",
            fontFamily: "'Outfit', sans-serif"
          }}>
                  {st}
                </span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(A=(H=u.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var C,R,W;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Button",
    hierarchy: "Primary",
    size: "Medium",
    icon: "False",
    state: "Default"
  }
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var V,q,_;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Secondary Color",
  args: {
    label: "Button",
    hierarchy: "Secondary color",
    size: "Medium",
    icon: "False",
    state: "Default"
  }
}`,...(_=(q=p.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var G,$,j;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: "Button",
    hierarchy: "Tertiary",
    size: "Medium",
    icon: "False",
    state: "Default"
  }
}`,...(j=($=y.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var N,J,K;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Link Color",
  args: {
    label: "Button",
    hierarchy: "Link color",
    size: "Medium",
    icon: "False",
    state: "Default"
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Link Grey",
  args: {
    label: "Button",
    hierarchy: "Link grey",
    size: "Medium",
    icon: "False",
    state: "Default"
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "With Leading Icon",
  args: {
    label: "Button",
    hierarchy: "Primary",
    size: "Medium",
    icon: "Leading",
    state: "Default"
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Icon Only",
  args: {
    label: "Action",
    hierarchy: "Primary",
    size: "Medium",
    icon: "Only",
    state: "Default"
  }
}`,...(te=(re=b.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,ie,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: "Button",
    hierarchy: "Primary",
    size: "Medium",
    icon: "False",
    state: "Disable"
  }
}`,...(oe=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const ge=["Playground","AllHierarchies","AllSizes","AllStates","Primary","SecondaryColor","Tertiary","LinkColor","LinkGrey","WithLeadingIcon","IconOnly","Disabled"];export{c as AllHierarchies,d as AllSizes,u as AllStates,S as Disabled,b as IconOnly,f as LinkColor,g as LinkGrey,l as Playground,m as Primary,p as SecondaryColor,y as Tertiary,h as WithLeadingIcon,ge as __namedExportsOrder,fe as default};
