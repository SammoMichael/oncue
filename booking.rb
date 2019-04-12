

def check_availability(start, finish)
    job_start = 7
    job_end = 20
    if (start < job_start && finish <= job_start) || (start >= job_end && finish > job_end) 
        return true
    else 
        return false
    end
end

p check_availability(18, 23)

