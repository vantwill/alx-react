# Set the latest task of the directory to 0 as default
$latest_task = "task_0"
$latest_task_num = [int]$latest_task.Substring($latest_task.Length - 1)
foreach ($item in Get-ChildItem) {
    # only select items with lengths of 5 or more
    if ($item.Name.Length -lt 5) {
        continue
    }
    # filter out items that aren't tasks
    # TODO deal with task numbers greater than 9
    if ($item.Name.Substring(0, 5) -eq "task_") {
        # Find the latest task or the highest value
        $task_num = [int]$item.name.Substring($item.name.Length - 1, 1)
        if ($task_num -gt $latest_task_num) {
            Write-Host $item.Name
            $latest_task = $item
            $latest_task_num = $task_num
        }
    }
}

# Create the new task directory label
$new_task = "task_$($latest_task_num + 1)"

# Windows command to xcopy the directory using exclude rules
xcopy /SI $latest_task $new_task /exclude:except.txt