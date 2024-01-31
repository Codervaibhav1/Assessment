import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "Ui",
  initialState: {
    UiData: [
      {
        ID: "BasicTechnicalWriting",
        ImageUrl:
          "images/training-certification/Basic-DITA%E2%80%93XML.jpg",
        Name: "Basic Technical Writing",
        ShortDesc:
          "This course focuses on understanding the basics of technical writing and developing technical writing skills...",
      },
      {
        ID: "ConfluenceAdvanced",
        ImageUrl:
          "images/training-certification/Advanced-DITA–XML.jpg",
        Name: "Confluence Advanced",
        ShortDesc:
          "This course focuses to ensure your documentation-type content is easy to manage and consume. This skill builder ...",
      },
      {
        ID: "ConfluenceBasic",
        ImageUrl: "images/training-certification/Authoring-Tools.jpg",
        Name: "Confluence Basic",
        ShortDesc:
          "This course guide end users to create their own easy to use and well-formatted content. This Skillbuilder covers ...",
      },
      {
        ID: "XMLAuthor",
        ImageUrl:
          "images/training-certification/Simplified-Technical-English.jpg",
        Name: "XML Author",
        ShortDesc:
          "This course focuses deepen the knowledge in XML Author, in any industry. In this course, you'll learn about writing ...",
      },
      {
        ID: "AdvancedTechnicalWriting-API",
        ImageUrl: "images/training-certification/Technical-Writing.jpg",
        Name: "Advanced Technical Writing - API",
        ShortDesc:
          "This course focuses on deepening the knoweldge of technical content deliverable, containing instructions ...",
      },
      {
        ID: "BasicDITA-XML",
        ImageUrl: "images/training-certification/Authoring-Tools.jpg",
        Name: "Basic DITA-XML",
        ShortDesc:
          "This course focuses on individuals keen to broaden their knowledge or specialize in basic DITA- XML, in any industry...",
      },
      {
        ID: "AdvancedDITA-XML",
        ImageUrl: "images/training-certification/Basic-DITA–XML.jpg",
        Name: "Advanced DITA-XML",
        ShortDesc:
          "This course focuses on individuals keen to broaden their knowledge or specialize in advanced DITA- XML, in any industry...",
      },
      {
        ID: "xMetaLAuthor",
        ImageUrl: "images/training-certification/Advanced-DITA–XML.jpg",
        Name: "xMetal Author",
        ShortDesc:
          "Learn xMetal for XML based authoring to manage high volume structured content development and management...",
      },
      {
        ID: "MadCapFlare",
        ImageUrl: "images/training-certification/Technical-Writing.jpg",
        Name: "MadCap Flare",
        ShortDesc:
          "This course focuses on developing technical writing skills to deepen the knowledge of Madcap Flare for writing...",
      },
    ],
  },
});

export default uiSlice.reducer;
