export const getBreadCrumbSchemaJson = (
    router,
    baseUrl,
    type,
    title
  ) => {
    const breadCrumbUrl = router.asPath;
    var breadCrumbPath = "";
    var breadCrumbArr = [];
    if (breadCrumbUrl) {
      breadCrumbPath = "Home" + breadCrumbUrl;
      breadCrumbArr = breadCrumbPath.split("/");
    }
    var breadcrumbSchemaData = [];
    var breadcrumbSchemaUrl = baseUrl + "/";
  
    breadCrumbArr.map((crumb, index) => {
      var tempBreadcrumbSchemaObject = {};
      if (index == 0) {
        tempBreadcrumbSchemaObject = {
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": `${baseUrl}/`,
            name: `${crumb}`,
          },
        };
      } else {
        let breadCrumbName = `${crumb}`;

        if(type === "article" && index == breadCrumbArr.length-1){
            breadcrumbSchemaUrl += crumb;
            breadCrumbName = title;
        }
        else{
            breadcrumbSchemaUrl += crumb + "/";
        }
  
        tempBreadcrumbSchemaObject = {
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": `${breadcrumbSchemaUrl}`,
            name: breadCrumbName,
          },
        };
      }
  
      breadcrumbSchemaData.push(tempBreadcrumbSchemaObject);
    });
  
    let breadcrumbSchemaJson = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbSchemaData,
    };
    return breadcrumbSchemaJson;
  };