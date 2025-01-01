import {createSlice} from "@reduxjs/toolkit"
const categoryEnum = {
    DAIRY: 'Dairy',
    FLESHI: 'Fleshi',
    VEGAN: 'Vegan',
};

const initialValue = {
    recipes: [
        {
            "id": 100,
            "name": "Chocolate Covered Chocolate Balls",
            "preparationTime": 20,
            "restingTime": 30,
            "ingredients": [
              "1 package (200g) plain biscuits, crushed",
              "1 cup (200g) milk chocolate, melted",
              "½ cup (100g) butter, melted",
              "2 tablespoons cocoa powder",
              "2 tablespoons sugar",
              "2 tablespoons milk or cream (optional)",
              "200g milk, dark, or white chocolate, melted (for coating)"
            ],
            "instructions": "Crush biscuits. Combine crushed biscuits, melted chocolate, melted butter, cocoa, and sugar. Mix well, add milk/cream if needed. Roll into balls. Melt coating chocolate. Dip balls in chocolate. Refrigerate for 30 minutes.",
            "category": categoryEnum.VEGAN,
            "image": "/cakes/chocolate.jpg",
            "isFavorite": false
          },
          {
            "id": 101,
            "name": "Classic Apple Pie",
            "preparationTime": 45, // Plus chilling time for the dough (at least 1 hour)
            "ingredients": [
                // Crust
                "2 1/2 cups all-purpose flour",
                "1 teaspoon salt",
                "1 cup (2 sticks) unsalted butter, very cold and cubed",
                "1/2 cup ice water",
                // Filling
                "6-8 medium apples (such as Granny Smith, Honeycrisp, or Gala), peeled, cored, and sliced",
                "3/4 cup granulated sugar",
                "1/4 cup all-purpose flour",
                "1 teaspoon ground cinnamon",
                "1/2 teaspoon ground nutmeg",
                "1/4 teaspoon ground allspice (optional)",
                "1 tablespoon lemon juice",
                "2 tablespoons unsalted butter, cut into small pieces",
                // Egg Wash (Optional)
                "1 egg, beaten",
                "1 tablespoon milk or water"
            ],
            "Instructions": [
                "Make the crust: In a large bowl, whisk together the flour and salt. Cut in the cold butter using a pastry blender or your fingertips until the mixture resembles coarse crumbs with some larger butter pieces remaining. Gradually add the ice water, mixing until the dough just comes together. Form the dough into a disc, wrap tightly in plastic wrap, and chill in the refrigerator for at least 1 hour, or up to overnight.",
                "Make the filling: In a large bowl, combine the apple slices, sugar, flour, cinnamon, nutmeg, allspice (if using), and lemon juice. Toss to combine. Preheat oven to 400°F (200°C).",
                "Assemble the pie: On a lightly floured surface, roll out half of the dough into a 12-inch circle. Carefully transfer the dough to a 9-inch pie plate. Pour the apple filling into the crust and dot with the small pieces of butter. Roll out the remaining dough into a 10-inch circle. Cut into strips and arrange them over the filling in a lattice pattern, or place the whole circle on top and cut slits for venting. Crimp the edges of the crust.",
                "Egg Wash (Optional): In a small bowl, whisk together the egg and milk or water. Brush the crust with the egg wash for a golden brown color. Sprinkle with a little extra sugar if desired.",
                "Bake: Bake for 45-55 minutes, or until the crust is golden brown and the filling is bubbly. If the crust starts to brown too quickly, cover the edges with foil. Let the pie cool completely on a wire rack before serving."
                ],
            "category": categoryEnum.VEGAN,
            "image": "../cakes/Photo by Diliara Garifullina on Unsplash.jpg", // Replace with appropriate image path
            "isFavorite": false
        },
        {
            "id": 102,
            "name": "Chocolate-Covered Marshmallow",
            "preparationTime": 45,
            "ingredients": [
                "1 cup (125g) all-purpose flour",
                "1/4 cup (50g) sugar",
                "1/2 cup (115g) unsalted butter, softened",
                "1 tablespoon cocoa powder",
                "1/4 teaspoon salt",
                "3/4 cup (150g) sugar",
                "1/4 cup (60ml) water",
                "2 tablespoons corn syrup or honey",
                "2 egg whites",
                "1/2 teaspoon vanilla extract",
                "1 cup (175g) semi-sweet chocolate chips",
                "1 tablespoon coconut oil or vegetable oil"
            ],
            "instructions": "Prepare the base:\nPreheat the oven to 350°F (175°C).\nMix flour, sugar, cocoa powder, and salt in a bowl.\nAdd butter and mix until a dough forms.\nRoll out the dough and cut into small round shapes (use a cookie cutter).\nPlace on a baking tray and bake for 8–10 minutes. Let cool completely.\nMake the marshmallow topping:\nIn a saucepan, combine sugar, water, and corn syrup. Heat until the mixture reaches 240°F (115°C) (soft-ball stage).\nIn a separate bowl, whip egg whites until soft peaks form.\nSlowly pour the hot sugar syrup into the egg whites while continuing to whip. Add vanilla extract and whip until thick and glossy.\nPipe the marshmallow mixture onto the cooled cookie bases using a piping bag.\nAdd the chocolate coating:\nMelt the chocolate chips and coconut oil in a microwave or double boiler until smooth.\nDip or drizzle the chocolate over the marshmallow-topped cookies.\nLet the treats set at room temperature or in the refrigerator.",
            "category": categoryEnum.VEGAN,
            "image": "/cakes/diliara-garifullina-2sjp6dNm1Nk-unsplash.jpg",
            "isFavorite": false
        },
        {
            id: 103,
            name: "Blueberry Cheesecake",
            preparationTime: 30,
            ingredients: [
                "1 1/2 cups graham cracker crumbs",
                "1/4 cup granulated sugar",
                "6 tablespoons unsalted butter, melted",
                "32 ounces (4 packages) cream cheese, softened",
                "1 3/4 cups granulated sugar",
                "1/4 cup all-purpose flour",
                "1 teaspoon vanilla extract",
                "4 large eggs",
                "1 cup sour cream or heavy cream",
                "2 cups fresh blueberries",
                "1/4 cup granulated sugar",
                "1 tablespoon lemon juice",
                "1 tablespoon cornstarch (optional, for thicker sauce)"
            ],
            Instructions: "Make the crust: Combine graham cracker crumbs, sugar, and melted butter in a bowl. Press firmly into the bottom of a 9-inch springform pan. Bake at 350°F (175°C) for 8-10 minutes if desired (for a crispier crust). Let cool. Make the filling: In a large bowl, beat softened cream cheese until smooth. Gradually add sugar and flour, beating until combined. Mix in vanilla extract. Add eggs one at a time, mixing on low speed until just combined. Stir in sour cream or heavy cream. Pour filling over the crust. Bake at 325°F (160°C) for 55-70 minutes, or until the edges are set and the center is slightly jiggly. Let cool completely in the oven with the door ajar for 1 hour, then chill in the refrigerator for at least 4 hours, preferably overnight. Make the blueberry topping: In a saucepan, combine blueberries, sugar, and lemon juice. If desired, whisk cornstarch with 1 tablespoon of water and add to the saucepan for a thicker sauce. Cook over medium heat, stirring constantly, until the blueberries have released their juices and the sauce has thickened slightly (about 5-7 minutes). Let the blueberry topping cool completely. Once the cheesecake is chilled, spread the blueberry topping evenly over the top. Serve chilled.",
            category: categoryEnum.DAIRY,
            image: '/cakes/delicous.jpg',
            isFavorite: false
        }
        ,
        {
            id: 104,
            name: "Chocolate Chunk Cookies",
            preparationTime: 25,
            ingredients: [
                "2 1/4 cups all-purpose flour",
                "1 teaspoon baking soda",
                "1 teaspoon salt",
                "1 cup (2 sticks) unsalted butter, softened",
                "3/4 cup granulated sugar",
                "3/4 cup packed brown sugar",
                "1 teaspoon vanilla extract",
                "2 large eggs",
                "2 cups semisweet chocolate chunks",
                "18-24 milk chocolate squares (e.g., Ghirardelli, Hershey's), depending on cookie size" // For the toppers
            ],
            Instructions: "In a small bowl, whisk together the flour, baking soda, and salt. In a large bowl, cream together the softened butter, granulated sugar, and brown sugar until light and fluffy. Beat in the vanilla extract and then the eggs, one at a time. Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Stir in the chocolate chunks. Cover the dough and chill in the refrigerator for at least 30 minutes. Preheat oven to 375°F (190°C). Line baking sheets with parchment paper. Drop rounded tablespoons of dough onto the prepared baking sheets, leaving some space between each cookie. Bake for 9-11 minutes, or until the edges are golden brown and the centers are still slightly soft. Remove from the oven and immediately press a chocolate square onto the center of each cookie while they are still warm. Let the cookies cool completely on the baking sheets before serving or storing.",
            category: categoryEnum.VEGAN,
            image: '/cakes/manychocolate.jpg',
            isFavorite: false
        },
        {
            id: 105,
            name: "Classic Cherry Pie",
            preparationTime: 30,
            ingredients: [
                "2 1/2 cups all-purpose flour",
                "1 teaspoon salt",
                "1 cup (2 sticks) unsalted butter, cold and cubed",
                "1/2 cup ice water",
                "4 cups pitted sour cherries (fresh or frozen)",
                "1 1/4 cups granulated sugar",
                "1/4 cup cornstarch",
                "1/4 teaspoon almond extract (optional)",
                "1 tablespoon lemon juice",
                "1 egg, beaten (for egg wash)",
                "1 tablespoon granulated sugar (for sprinkling)"
            ],
            Instructions: "Make the crust: In a large bowl, whisk together the flour and salt. Cut in the cold butter using a pastry blender or your fingertips until the mixture resembles coarse crumbs. Gradually add the ice water, mixing until the dough just comes together. Form the dough into a disc, wrap in plastic wrap, and chill in the refrigerator for at least 2 hours. Make the filling: In a large bowl, combine the cherries, sugar, cornstarch, almond extract (if using), and lemon juice. Gently toss to combine. Preheat oven to 400°F (200°C). On a lightly floured surface, roll out half of the dough into a 12-inch circle. Transfer the dough to a 9-inch pie plate. Pour the cherry filling into the crust. Roll out the remaining dough into a 10-inch circle. Cut into strips and arrange them over the filling in a lattice pattern, or place the whole circle on top and cut slits for venting. Crimp the edges of the crust. Brush the crust with the beaten egg and sprinkle with sugar. Bake for 45-55 minutes, or until the crust is golden brown and the filling is bubbly. Let the pie cool completely on a wire rack before serving.",
            category: categoryEnum.VEGAN,
            image: '/cakes/red.jpg',
            isFavorite: false
        },
        {
            "id": 106,
            "name": "Chocolate Souffle",
            "preparationTime": 25,
            "bakingTime": 18,
            "ingredients": [
                "4 ounces bittersweet chocolate, finely chopped",
                "2 tablespoons unsalted butter, plus more for ramekins",
                "1/4 cup granulated sugar, plus more for ramekins",
                "3 large eggs, separated",
                "1/4 teaspoon cream of tartar",
                "Pinch of salt",
                "1/2 teaspoon vanilla extract"
            ],
            "instructions": "Preheat oven to 375°F (190°C). Butter and sugar four 6-ounce ramekins.\nMelt chocolate and 2 tablespoons butter in a double boiler or microwave, stirring until smooth.\nIn a large bowl, whisk egg yolks and 1/4 cup sugar until pale and thick. Whisk in melted chocolate mixture and vanilla extract.\nIn a separate clean bowl, beat egg whites with cream of tartar and salt until stiff peaks form.\nGently fold one-third of the beaten egg whites into the chocolate mixture to lighten it. Then, gently fold in the remaining egg whites until just combined.\nDivide the batter evenly among the prepared ramekins.\nBake for 15-18 minutes, or until the soufflés are puffed and the centers are still slightly moist.\nServe immediately.",
            "category": categoryEnum.VEGAN,
            "image": "/cakes/marine-dumay-Zjs4aHL3uRU-unsplash.jpg",
            "isFavorite": false
        },
        {
            "id": 107,
            "name": "Chocolate Hazelnut Babka",
            "preparationTime": 120,
            "ingredients": [
                "4 cups (500g) all-purpose flour",
                "1/3 cup (65g) sugar",
                "2 1/4 teaspoons (7g) instant yeast",
                "1/2 teaspoon salt",
                "3/4 cup (180ml) milk, warmed",
                "2 large eggs",
                "1/3 cup (75g) unsalted butter, softened",
                "1/2 cup (120g) chocolate spread (e.g., Nutella)",
                "1/2 cup (75g) chopped hazelnuts",
                "1/4 cup (50g) brown sugar",
                "1 teaspoon ground cinnamon"
            ],
            "instructions": "Prepare the dough:\nIn a large bowl, mix flour, sugar, yeast, and salt. Add warmed milk and eggs, then knead until a soft dough forms.\nAdd softened butter and continue kneading until the dough is smooth and elastic (about 10 minutes).\nCover and let rise for 1-2 hours, or until doubled in size.\nPrepare the filling:\nMix the chocolate spread, brown sugar, cinnamon, and chopped hazelnuts in a bowl.\nShape and assemble the babka:\nRoll the dough into a large rectangle (about 12x16 inches).\nSpread the filling evenly over the dough, leaving a small border around the edges.\nRoll the dough tightly into a log and cut it lengthwise down the middle.\nTwist the two halves together to form a braid and place it into a greased loaf pan or shape it into a round knot.\nFinal rise and baking:\nCover and let the babka rise for another 30-45 minutes.\nPreheat the oven to 350°F (175°C).\nBake the babka for 30-35 minutes, or until golden brown and cooked through.\nLet cool slightly before serving.",
            "category": categoryEnum.DAIRY,
            "image": "/cakes/zineb-sakhaoui-7Q7xoaw7MhQ-unsplash.jpg",
            "isFavorite": false
        }
        ,
        {
            "id": 108,
           "name": "Chocolate Hazelnut Tart",
            "preparationTime": 90,
            "ingredients": [
                "1 1/2 cups (190g) all-purpose flour",
                "1/4 cup (50g) sugar",
                "1/2 cup (115g) unsalted butter, cold and cubed",
                "1 large egg",
                "1/2 teaspoon vanilla extract",
                "1/4 teaspoon salt",
                "1/2 cup (120ml) heavy cream",
                "1/2 cup (120g) dark chocolate, chopped",
                "1/4 cup (60g) hazelnut spread",
                "1/4 cup (50g) chopped hazelnuts",
                "Chocolate decorations (optional)",
                "Whipped cream or meringue for topping"
            ],
            "instructions": "Prepare the tart crust:\nIn a bowl, mix flour, sugar, and salt. Add cold butter and rub with your fingers until the mixture resembles breadcrumbs.\nAdd the egg and vanilla extract, then mix until a dough forms. Wrap the dough in plastic wrap and refrigerate for 30 minutes.\nRoll out the chilled dough and press it into a tart pan. Prick the base with a fork and bake at 350°F (175°C) for 15–20 minutes or until golden. Let cool.\nPrepare the filling:\nHeat the heavy cream in a saucepan until it just begins to simmer.\nPour the hot cream over the chopped dark chocolate in a bowl. Let sit for 2 minutes, then stir until smooth.\nMix in the hazelnut spread and chopped hazelnuts.\nAssemble the tart:\nPour the chocolate filling into the cooled tart shell and smooth the top.\nChill in the refrigerator for at least 1 hour until set.\nDecorate and serve:\nTop the tart with whipped cream, meringue, or chocolate decorations as desired. Serve chilled.",
            "category": categoryEnum.DAIRY,
            "image": "/cakes/zyanya-citlalli-ErZbxoGdrRg-unsplash.jpg",
            "isFavorite": false
        },
        {
            "id": 109,
            "name": "Chocolate Raspberry Mille-Feuille",
            "preparationTime": 120,
            "ingredients": [
                "200g dark chocolate, melted",
                "200g whipping cream",
                "50g powdered sugar",
                "1 teaspoon vanilla extract",
                "100g fresh raspberries",
                "2 tablespoons raspberry jam",
                "100g dark chocolate shavings (for garnish)"
            ],
            "instructions": "Prepare the chocolate layers:\n1. Melt the dark chocolate and spread it thinly onto baking parchment or silicone sheets.\n2. Allow the chocolate to cool and harden, then cut into rectangular layers.\n\nPrepare the whipped cream:\n1. In a bowl, whip the cream, powdered sugar, and vanilla extract until soft peaks form.\n\nAssemble the mille-feuille:\n1. Place one chocolate layer on a serving plate.\n2. Spread a layer of whipped cream over the chocolate and add a few fresh raspberries and a small amount of raspberry jam.\n3. Repeat the layers until you have 6–8 layers, finishing with whipped cream and fresh raspberries on top.\n\nGarnish:\n1. Sprinkle dark chocolate shavings over the top layer.\n2. Serve immediately or chill slightly before serving.",
            "category": categoryEnum.DAIRY,
            "image": "/cakes/otto-norin-zuLYIQ-4ADQ-unsplash.jpg",
            "isFavorite": false
        },
        {
            "id": 110,
            "name": "Caramel Chocolate Cheesecake",
            "preparationTime": 90,
            "ingredients": [
                "200g graham crackers, crushed",
                "75g unsalted butter, melted",
                "400g cream cheese, softened",
                "100g sugar",
                "2 large eggs",
                "1 teaspoon vanilla extract",
                "100g chocolate squares (e.g., milk chocolate)",
                "150g caramel sauce"
            ],
            "instructions": "Prepare the crust:\n1. Mix the crushed graham crackers and melted butter.\n2. Press the mixture into the bottom of a springform pan.\n3. Chill in the refrigerator for 10 minutes.\n\nPrepare the cheesecake filling:\n1. Preheat the oven to 160°C (320°F).\n2. In a bowl, beat the cream cheese and sugar until smooth.\n3. Add eggs one at a time, then mix in the vanilla extract.\n4. Pour the filling over the chilled crust.\n\nBake the cheesecake:\n1. Bake for 30–40 minutes until the center is set.\n2. Let the cheesecake cool to room temperature, then chill in the refrigerator for at least 2 hours.\n\nAssemble and garnish:\n1. Pour caramel sauce over the chilled cheesecake.\n2. Place chocolate squares on top, forming a decorative layer.\n3. Serve immediately or chill for an additional 30 minutes before serving.",
            "category": categoryEnum.DAIRY,
            "image": "/cakes/fallon-michael-Fde8e30pJL4-unsplash.jpg",
            "isFavorite": false
        },
        {
            id: 111,
            name: "Oreo Ice Cream",
            preparationTime: 20,
            ingredients: [
                "1 1/2 cups heavy cream",
                "1/2 cup whole milk",
                "3/4 cup granulated sugar",
                "1/4 teaspoon salt",
                "1 teaspoon vanilla extract",
                "1 cup coarsely crushed Oreo cookies (about 15-20 cookies)"
            ],
            Instructions: "In a medium saucepan, combine the heavy cream, milk, sugar, and salt. Cook over medium heat, stirring constantly, until the sugar is dissolved and the mixture is warm (do not boil). Remove from heat and stir in the vanilla extract. Cover and chill the mixture in the refrigerator for at least 4 hours, or preferably overnight. Once chilled, pour the mixture into an ice cream maker and churn according to the manufacturer's instructions. During the last few minutes of churning, add the crushed Oreo cookies. Once churned, transfer the ice cream to an airtight container and freeze for at least 2 hours, or until firm. Enjoy!",
            category: "DAIRY",
            image: '/cakes/oreo.jpg',
            isFavorite: false
        }
        ,
        {
            "id": 112,
            "name": "Raspberry Popsicle",
            "preparationTime": 15,
            "ingredients": [
                "300g fresh raspberries",
                "200ml water",
                "2 tablespoons honey or sugar (adjust to taste)",
                "1 tablespoon lemon juice"
            ],
            "instructions": "1. Blend the raspberries, water, honey (or sugar), and lemon juice until smooth.\n2. Strain the mixture through a fine mesh sieve to remove seeds (optional).\n3. Pour the mixture into popsicle molds.\n4. Insert popsicle sticks and freeze for at least 4–6 hours, or until solid.\n5. To release the popsicles, run the molds under warm water for a few seconds and gently pull out the popsicles.",
            "category": categoryEnum.VEGAN,
            "image": "/cakes/pablo-merchan-montes-MXovqM130UI-unsplash.jpg",
            "isFavorite": false
        },
        {
            "id": 113,
            "name": "Cherry Cheesecake",
            "preparationTime": 90,
            "ingredients": [
                "200g digestive biscuits (or graham crackers)",
                "100g melted butter",
                "500g cream cheese",
                "200g sour cream",
                "150g sugar",
                "3 large eggs",
                "1 teaspoon vanilla extract",
                "200g fresh or canned cherries (pitted)",
                "2 tablespoons cherry jam (optional, for glaze)"
            ],
            "instructions": "1. Preheat the oven to 160°C (320°F) and line the base of a springform cake tin with baking paper.\n2. Crush the biscuits into fine crumbs and mix with the melted butter. Press the mixture into the base of the tin to form the crust. Chill in the fridge while preparing the filling.\n3. In a large bowl, beat the cream cheese, sour cream, and sugar until smooth. Add eggs one at a time, then mix in the vanilla extract.\n4. Pour the filling over the crust and bake for 50–60 minutes, or until the center is set but slightly wobbly.\n5. Let the cheesecake cool to room temperature, then refrigerate for at least 4 hours or overnight.\n6. Arrange the cherries on top of the chilled cheesecake. Optionally, warm the cherry jam slightly and brush over the cherries for a glossy finish.\n7. Slice and serve chilled.",
            "category": categoryEnum.DAIRY,
            "image": "/cakes/1.jpg",
            "isFavorite": false
        },
        
        {
            "id": 114,
            "name": "Chocolate Chip Cookies",
            "preparationTime": 30,
            "ingredients": [
                "200g unsalted butter, softened",
                "150g brown sugar",
                "100g white sugar",
                "2 large eggs",
                "1 teaspoon vanilla extract",
                "300g all-purpose flour",
                "1 teaspoon baking soda",
                "1/2 teaspoon salt",
                "200g chocolate chips (milk or dark, as preferred)"
            ],
            "instructions": "1. Preheat the oven to 180°C (350°F) and line two baking sheets with parchment paper.\n2. In a large bowl, cream together the softened butter, brown sugar, and white sugar until light and fluffy.\n3. Beat in the eggs one at a time, then stir in the vanilla extract.\n4. In a separate bowl, whisk together the flour, baking soda, and salt. Gradually mix the dry ingredients into the wet ingredients until a dough forms.\n5. Fold in the chocolate chips until evenly distributed.\n6. Drop spoonfuls of dough onto the prepared baking sheets, leaving space between each cookie.\n7. Bake for 10-12 minutes, or until the edges are golden brown but the centers are still soft.\n8. Allow the cookies to cool on the baking sheets for 5 minutes before transferring to a wire rack to cool completely. Serve and enjoy!",
            "category": categoryEnum.VEGAN,
            "image": "/cakes/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg",
            "isFavorite": false
        },
        {
            "id": 115,
            "name": "Basic Croissant",
            "preparationTime": 60,
            "restingTime": 180,
            "bakingTime": 20,
            "ingredients": [
                "500g strong white bread flour",
                "10g dry yeast (or 25g fresh yeast)",
                "50g sugar",
                "10g salt",
                "250ml lukewarm milk",
                "125ml cold water",
                "250g very cold butter",
                "1 beaten egg"
            ],
            "instructions": "In a mixer bowl, mix flour, yeast, sugar, and salt.\nAdd milk and water and knead until a smooth dough forms.\nLet the dough rise for about an hour.\nRoll out the dough and refrigerate for an hour.\nRoll out the butter into a rectangle.\nPlace the butter in the center of the dough and fold like an envelope.\nRoll out and repeat the folding process two more times.\nRoll out the dough and cut triangles.\nRoll the triangles into croissants.\nLet them proof and brush with egg.\nBake at 180°C (350°F) for 15-20 minutes.",
            "category": categoryEnum.VEGAN,
            "image": "/cakes/mae-mu-m9pzwmxm2rk-unsplash.jpg",
            "isFavorite": false
        },
        {
            "id": 116,
            "name": "Tall Round Chocolate Cake with Strawberry Cream",
            "preparationTime": 30,
            "bakingTime": 35,
            "ingredients": [
                "2 cups (250g) all-purpose flour",
                "¾ cup (75g) unsweetened cocoa powder",
                "1 ½ teaspoons baking powder",
                "1 ½ teaspoons baking soda",
                "½ teaspoon salt",
                "2 cups (400g) granulated sugar",
                "2 large eggs",
                "1 cup (240ml) buttermilk",
                "½ cup (120ml) vegetable oil",
                "2 teaspoons vanilla extract",
                "1 cup (240ml) boiling water",
                "1 cup (240ml) heavy cream",
                "½ cup (60g) powdered sugar",
                "1 teaspoon vanilla extract",
                "1 cup (150g) fresh strawberries, hulled and sliced"
            ],
            "instructions": "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.\nWhisk together flour, cocoa powder, baking powder, baking soda, and salt.\nIn a separate bowl, whisk together sugar, eggs, buttermilk, oil, and vanilla extract.\nAdd dry ingredients to wet ingredients, mixing until just combined.\nPour in boiling water and mix until smooth.\nDivide batter between cake pans.\nBake for 30-35 minutes.\nLet cakes cool completely.\nBeat heavy cream until soft peaks form.\nAdd powdered sugar and vanilla and beat until stiff peaks form.\nGently fold in sliced strawberries.\nAssemble the cake: Layer cake, cream, and then the top layer. Decorate with strawberries if desired.",
            "category": categoryEnum.VEGAN,
            "image": "/cakes/odiseo-castrejon-LTaNflncXV0-unsplash.jpg",
            "isFavorite": false
        },
        {
            "id": 117,
            "name": "Raspberry Swirl Cheesecake with Crumble",
            "preparationTime": 45,
            "bakingTime": 70,
            "restingTime": 300,
            "ingredients": [
                "1 ½ cups (180g) graham cracker crumbs",
                "5 tablespoons (70g) unsalted butter, melted",
                "2 tablespoons (25g) granulated sugar",
                "32 ounces (900g) cream cheese, softened",
                "1 ¾ cups (350g) granulated sugar",
                "1/4 cup (30g) all-purpose flour",
                "1 teaspoon vanilla extract",
                "4 large eggs",
                "1 cup (240ml) sour cream",
                "1 cup (150g) fresh or frozen raspberries",
                "2 tablespoons (30g) granulated sugar",
                "1 tablespoon (15ml) lemon juice",
                "1 cup (120g) all-purpose flour",
                "½ cup (100g) granulated sugar",
                "½ cup (115g) cold unsalted butter"
            ],
            "instructions": "Preheat oven to 350°F (175°C). Make the crust: Combine crumbs, butter, and sugar. Press into pan. Bake 8-10 min. Let cool. Make raspberry swirl: Combine raspberries, sugar, and lemon juice. Cook until sauce forms. Strain. Cool. Make filling: Beat cream cheese, sugar, and flour. Mix in vanilla, eggs, and sour cream. Make crumble: Combine flour and sugar. Cut in butter. Assemble: Pour half filling, swirl half sauce, remaining filling, swirl remaining sauce, sprinkle crumble. Bake 55-70 min. Cool in oven 1 hour, then chill 4+ hours.",
            "category": categoryEnum.DAIRY,
            "image": "/cakes/101.jpg",
            "isFavorite": false
        },
        {
            "id": 118,
            "name": "Layered Chocolate Nut Cake",
            "preparationTime": 30,
            "bakingTime": 35,
            "ingredients": [
                "2 cups (250g) all-purpose flour",
                "¾ cup (75g) unsweetened cocoa powder",
                "1 ½ teaspoons baking powder",
                "1 ½ teaspoons baking soda",
                "½ teaspoon salt",
                "2 cups (400g) granulated sugar",
                "2 large eggs",
                "1 cup (240ml) buttermilk",
                "½ cup (120ml) vegetable oil",
                "2 teaspoons vanilla extract",
                "1 cup (240ml) boiling water",
                "1 cup (225g) unsalted butter, softened",
                "3 cups (375g) powdered sugar",
                "½ cup (60g) unsweetened cocoa powder",
                "½ cup (120ml) milk",
                "1 teaspoon vanilla extract",
                "1 cup (120g) mixed nuts, chopped"
            ],
            "instructions": "Preheat oven to 350°F (175°C). Grease and flour two 9-inch pans.\nWhisk dry ingredients.\nWhisk wet ingredients (except boiling water).\nCombine wet and dry ingredients.\nAdd boiling water and mix.\nDivide batter into pans and bake 30-35 min.\nCool cakes completely.\nBeat butter for frosting. Add sugar and cocoa. Add milk and vanilla. Beat until fluffy.\nAssemble cake: Layer cake, frosting, top layer, remaining frosting, and nuts.",
            "category": categoryEnum.VEGAN,
            "image": "/cakes/afif-ramdhasuma-YsgHMllRWxc-unsplash.jpg",
            "isFavorite": false
        },
        {
            "id": 119,
            "name": "Strawberry Smoothie",
            "preparationTime": 5,
            "ingredients": [
              "1 cup (150g) fresh or frozen strawberries",
              "½ cup (120ml) milk (dairy or non-dairy)",
              "½ cup (120g) plain yogurt (optional)",
              "1 tablespoon honey or maple syrup (optional)",
              "½ cup (60g) ice cubes (optional)"
            ],
            "instructions": "Combine all ingredients in a blender. Blend until smooth. Pour into a glass and enjoy!",
            "category": categoryEnum.DAIRY,
            "image": "/cakes/victoria-JGK2EWz6iAE-unsplash.jpg",
            "isFavorite": false
          }
    ]
}

const recipesSlice=createSlice({
    name: "reciepes",
    initialState: initialValue,
    reducers:{
        addReciepe:(state, action)=>{
            state.recipes.push(action.payload);
        },
        ToggleFavorite:(state, action)=>{
            debugger
            const recipe=state.recipes.find((recipe)=>recipe.id === action.payload.id)
            recipe.isFavorite=!recipe.isFavorite
        }
    }
})

export const {addReciepe, ToggleFavorite} = recipesSlice.actions
export default recipesSlice.reducer