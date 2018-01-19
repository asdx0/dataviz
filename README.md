# Ashley dePreaux Data Viz Project - Baseball Stats

## Summary

My data visualization is an overview of homeruns and batting averages for different baseball players. The y-axis displays the number of homeruns for each player, the x-axis displays the batting average, the color indicates the right- or left-handedness of the player, and the radius is scaled according to the player's combined height and weight.

## Design

I chose to look at the relationship between four different variables: homeruns, batting average, a combined scale of height and weight, and handedness. To scale the height and weight, I took the max and min values of each attribute and assigned each player's height and weight a value between 0 and 1. I added the scaled height and weight variables together to create a scale between 0 and 2 for the radius. Selecting the color to indicate right-handed vs left-handed was an obvious choice due to it being a binary variable. Finally, I scaled the y-axis using a square root scale instead of a linear scale--this way I was able to see the positive relationship more clearly. However, once I performed this action, I noticed there were several data points sitting at 0,0. To mitigate this, I removed data points which had a value of 0 for both home runs and batting average.

After my feedback, I added my axis labels and changed my title to be more descriptive of my visualization. I did not add a background to the SVG as that would have made it too complicated, but I did increase the size of my chart due to the amount of datapoints because displayed. Additionally, after considering the feedback, I decided to add a legend for the radius to depict the height/weight as well.

## Feedback

1. More descriptive title.
2. Need axis labels.
3. Add background to svg and it's too small.

## Resources

Udacity's Data Visualization Course

Colt Steele's Advanced Web Developer Bootcamp
https://www.udemy.com/the-advanced-web-developer-bootcamp/