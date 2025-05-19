# Task-Manager-App (README & Reflection Essay)

## 🚀 How It Works

1. **Add a Task**:  
   Fill in the task name, category, deadline, and choose a status (e.g. "In Progress"). Click "Add Task" to add it to your list.

2. **Update Status**:  
   Use the dropdown on each task card to change its status (e.g. mark it as "Completed").

3. **Automatic Overdue Detection**:  
   If the deadline passes and the task isn’t completed, the app automatically marks it as **Overdue**.

4. **Filter Tasks**:  
   Filter tasks by status or category using the dropdown and text input at the top.

5. **Clear All**:  
   Click the “Clear All Tasks” button to remove everything from the list and localStorage.

---

## 🛠 Features

- Add, view, and update tasks  
- Automatically mark overdue tasks  
- Filter by category and status  
- Persistent data with `localStorage`  
- Simple and responsive card layout    

---

## 🧠 Extra Features

- Real-time filtering as you type in the category filter  
- Status updates directly from each task card  
- “Clear All” button to reset task list

---


## 📘 Reflection

Building this task manager app was an interesting but sometimes tricky project. One of the biggest challenges was making sure tasks updated correctly, especially when the status changed or when filtering by category. Getting the overdue logic to work based on the current date also took a bit of trial and error, since I had to compare dates properly and make sure everything refreshed at the right time.

To solve those problems, I broke things down into smaller steps: first getting tasks to display, then adding filtering, and finally handling localStorage so tasks wouldn’t disappear on refresh. Once that was working, I focused on styling the app to make it look clean and easy to use.

If I had more time, I’d love to add editing for existing tasks, maybe drag-and-drop capabilities, and even some sort of notification for upcoming or overdue deadlines. Overall, it was a great learning experience and a solid way to practice real-world JavaScript and DOM manipulation.

---

## 💡 Future Improvements

- Task editing
- Search bar
- Due date reminders or notifications
