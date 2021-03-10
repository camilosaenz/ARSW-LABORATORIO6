var apimock = (function () {

    var mockdata = [];

    mockdata["JhonConnor"] = [
        {
            author: "JhonConnor",
            name: "house",
            points: [
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 45,
                    y: 25
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "bike",
            points: [
                {
                    x: 30,
                    y: 35
                },
                {
                    x: 40,
                    y: 45
                }
            ]
        }
    ]

    mockdata['LexLuthor'] = [
        {
            author: 'LexLuthor',
            name: 'kryptonite',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                }
            ]
        }
    ]
    
    mockdata['Carlos'] = [
         {
             author: 'Carlos',
             name: 'city',
             points: [
                 {
                     x: 10,
                     y: 15
                 },
                 {
                     x: 20,
                     y: 25
                 }
             ]
         }
     ]
    
    mockdata['Camilo'] = [
	      {
	          author: 'Camilo',
	          name: 'town',
	          points: [
	              {
	                  x: 5,
	                  y: 10
	              },
	              {
	                  x: 30,
	                  y: 35
	              }
	          ]
	      },
		  {
			  author: 'Camilo',
			  name: 'city',
			  points: [
				{
					x: 10,
                    y: 15
                },
                {
                    x: 20,
                    y: 25
                }
			  ]
		  }
	  ]

    return {
        getBlueprintsByAuthor: function(author, callback) {
            callback(mockdata[author]);
        },

        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(blueprint)
        }
    }

})();