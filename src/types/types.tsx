export interface IItem {
  node: {
  name: string,
  node_locale: string,
  thumbnailImage:{  
    file: {
      url: string
    }
  },
	colorFamily:[ 
		{
    name: string
    } 
 ],
	categoryTags: string[],
	shopifyProductEu: {
		variants: {
			edges: [
			{
				node: {
				price: string
				}
				}
			]
			}
		}
	}
}