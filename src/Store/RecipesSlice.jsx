import {createSlice} from "@reduxjs/toolkit"
const categoryEnum = {
    DAIRY: 'Dairy',
    FLESHI: 'Fleshi',
    VEGAN: 'Vegan',
};

const initialValue = {
    recipes: [
        {
            id: 100,
            name: "Chocolate Chip Cookies",
            preparationTime: 20,
            ingredients: ["2 1/4 cups (280g) all-purpose flour",
                "1/2 teaspoon baking soda",
                "1/2 teaspoon salt",
                "170g (3/4 cup) unsalted butter, melted",
                "3/4 cup (150g) brown sugar, packed",
                "1/2 cup (100g) granulated sugar",
                "1 large egg",
                "1 large egg yolk",
                "2 teaspoons vanilla extract",
                "1 1/2 cups (250g) semi-sweet chocolate chips"],
            Instructions: "Preheat your oven to 175°C (350°F) and line a baking sheet with parchment paper. In a medium bowl, whisk together flour, baking soda, and salt. Set aside. In a large bowl, mix the melted butter, brown sugar, and granulated sugar until smooth. Add the egg, egg yolk, and vanilla extract. Mix well. Gradually add the dry ingredients to the wet ingredients and mix until just combined. Fold in the chocolate chips. Scoop the dough into small balls (about 2 tablespoons each) and place them on the baking sheet, leaving enough space between each cookie. Bake for 10-12 minutes or until the edges are golden brown but the center is still soft. Let the cookies cool on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely.",
            category: categoryEnum.VEGAN,
            image: '/cakes/cholatechips.jpg',
            isFavorite: false
        },
        {
            id: 101,
            name: "Rustic Strawberry Galette",
            preparationTime: 45,
            ingredients: ["1 1/4 cups (160g) all-purpose flour",
                "1/4 teaspoon salt",
                "1 tablespoon granulated sugar",
                "1/2 cup (115g) cold unsalted butter, cubed",
                "3–4 tablespoons ice water",
                "2 cups (300g) fresh strawberries, hulled and sliced",
                "1/4 cup (50g) granulated sugar (adjust to taste)",
                "1 tablespoon cornstarch",
                "1 teaspoon lemon juice",
                "1/2 teaspoon vanilla extract",
                "1 egg, beaten (for egg wash)",
                "1 egg, beaten (for egg wash)"
            ],
            Instructions: "In a bowl, mix the flour, salt, and sugar. Add the cold butter and cut it into the flour mixture using a pastry cutter or your fingers until the mixture resembles coarse crumbs. Gradually add the ice water, 1 tablespoon at a time, mixing until the dough just comes together. Do not overmix. Form the dough into a disc, wrap it in plastic wrap, and refrigerate for at least 1 hour. In a bowl, combine the sliced strawberries, sugar, cornstarch, lemon juice, and vanilla extract. Toss gently to coat. Preheat your oven to 190°C (375°F) and line a baking sheet with parchment paper. Roll out the chilled dough on a floured surface into a rough 12-inch circle. Transfer the dough to the prepared baking sheet. Spoon the strawberry filling into the center of the dough, leaving a 2-inch border. Fold the edges of the dough over the filling, pleating as you go, to form a rustic edge. Brush the folded edges of the dough with the beaten egg and sprinkle with coarse sugar if desired. Bake for 35–40 minutes, or until the crust is golden and the filling is bubbling. Let the galette cool slightly before serving.",
            category: categoryEnum.DAIRY,
            image: '/cakes/cakee.jpg',
            isFavorite: false
        },
        {
            id: 102,
            name: "Chocolate Milkshake",
            preparationTime: 15,
            ingredients: [
                "2 cups milk (or almond/soy/oat milk)",
                "4 scoops high-quality chocolate ice cream",
                "2 tablespoons unsweetened cocoa powder",
                "2 tablespoons chocolate syrup",
                "1/2 cup ice",
                "Whipped cream (for topping)",
                "Chopped chocolate bar (e.g., Twix, KitKat, or any favorite bar)",
                "Grated chocolate or cocoa powder for dusting",
                "Melted chocolate (for rimming the glass)"
            ],
            Instructions: "Prepare the glass: Melt some chocolate (in the microwave or using a double boiler). Dip the rim of the glass in the melted chocolate and let it drip down the sides. You can also add cookie crumbs or colorful sprinkles to the chocolate before it hardens. Make the shake: In a food processor or blender, combine the milk, chocolate ice cream, cocoa powder, chocolate syrup, and ice until smooth and thick. Assemble: Pour the milkshake into the prepared glass. Add a generous layer of whipped cream on top. Insert a chocolate bar for decoration. Dust with grated chocolate or cocoa powder. Serve: Serve immediately and enjoy!",
            category: categoryEnum.DAIRY,
            image: '/cakes/22.jpg',
            isFavorite: false
        },
        {
            id: 103,
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
        },
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
            category: "COOKIES",
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
            category: "PIES",
            image: '/cakes/red.jpg',
            isFavorite: false
        },
        {
            id: 106,
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
            category: "CHEESECAKES",
            image: '/cakes/delicous.jpg',
            isFavorite: false
        },
        {
            "id": 107,
            "name": "Chocolate-Covered Marshmallow Treats",
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
            "category": "COOKIES",
            "image": "/cakes/diliara-garifullina-fbdgjpKG1aU-unsplash.jpg",
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
        }
    }
})

export const {addReciepe} = recipesSlice.actions
export default recipesSlice.reducer