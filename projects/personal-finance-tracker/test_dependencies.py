import tkinter as tk

root = tk.Tk()
root.title("Personal Finance Tracker")

# Create a frame to hold the main components
main_frame = tk.Frame(root)
main_frame.pack(fill="both", expand=True)

# Create a label and text field for the user to enter their income
income_label = tk.Label(main_frame, text="Income:")
income_label.pack()
income_text = tk.Entry(main_frame)
income_text.pack()

# Create a label and text field for the user to enter their expenses
expenses_label = tk.Label(main_frame, text="Expenses:")
expenses_label.pack()
expenses_text = tk.Entry(main_frame)
expenses_text.pack()

root.mainloop()