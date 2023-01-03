# Work-Day Scheduler

## Description:
  This app allows a user to input and save notes in a 12-hour time window from 6AM to 6PM. The current build is not fully functional as one should be able to see the time in which they are writing and saving notes. Currently, my code reads 'currenthour' instead of the proper time of the given time block. I suspect this is a scope issue, but I haven't been able to fully work that out. I am turning this in now, since I have fulfilled the majority of the acceptance criteria. Users can save their input note with the floppy disk icon on the far right of the given timeblock. To delete a full note, or one piece within that note, users must simply highlight the undesired information, click delete/backspace, and then again click save on the floppy disk icon. In order to fully delete all locally stored data, the user must delete cookies in the console. 

  The assignment's User Story and Acceptance Criteria can be found in their own sections below.
  
## User Story:
```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

  ## Acceptance Criteria:
  ```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
  ## Screenshots: 
  You can input text into the timeblock boxes of your scheduler.
  ![image](https://user-images.githubusercontent.com/112277445/210440252-3a1623f7-bc49-4f69-9a31-8242bad74af5.png)
  Once you are finished with your input, click save with the floppy disk icon and your note will be saved within the timeblock box until you delete it. You can save to multiple timeblocks at once as shown below.
  ![image](https://user-images.githubusercontent.com/112277445/210441316-bd70c3f9-386b-4491-b7e5-6e4533246fa8.png)
  Here is an example of the app after the text input about lunch has been deleted and after adding new information to a timeblock that already had previously saved info within its box.
  ![image](https://user-images.githubusercontent.com/112277445/210441685-2d00b975-7494-43f1-b5c5-0d3208c0f743.png)
  ## Deployment Links:
  Here is a link to my GitHub [repo!](https://github.com/roldanmoncada/work-day-scheduler)
  
  And here is the deployed app [link!](https://note-taker-express-roldan.herokuapp.com/)