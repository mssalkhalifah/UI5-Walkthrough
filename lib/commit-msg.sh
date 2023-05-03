#!/bin/bash

# Define commit types and their short descriptions
commit_types=("feat: A new feature" "fix: A bug fix" "docs: Documentation changes" "style: Changes that do not affect the meaning of the code" "refactor: Code changes that neither fix a bug nor add a feature" "test: Adding or updating tests" "chore: Changes to the build process or auxiliary tools")
num_commit_types=${#commit_types[@]}

# Print commit type options and prompt user for selection
echo "Select the type of commit message:"
for ((i = 0; i < $num_commit_types; i++)); do
    echo "$((i + 1)). ${commit_types[$i]}"
done

while true; do
    read -rp "Enter the number of your selection (1-$num_commit_types): " commit_type_num
    if (($commit_type_num >= 1 && $commit_type_num <= $num_commit_types)); then
        break
    else
        echo "Error: Invalid selection."
    fi
done

# Extract commit type from selection and prompt user for commit subject
commit_type=$(echo "${commit_types[$commit_type_num - 1]}" | cut -d':' -f1)
commit_short_desc=$(echo "${commit_types[$commit_type_num - 1]}" | cut -d':' -f2-)

while true; do
    read -rp "Enter a short description of the commit (1-50 characters): " commit_subject
    if ((${#commit_subject} > 0 && ${#commit_subject} < 51)); then
        break
    else
        echo "Error: Commit subject must be between 1 and 50 characters."
    fi
done

# Prompt user for commit body (optional)
read -rp "Enter a detailed description of the commit (optional): " commit_body

# Prompt user for commit footer (optional)
read -rp "Enter any additional information for the commit (optional): " commit_footer

# Construct commit message
commit_message="${commit_type}: ${commit_subject}"

if [[ -n "$commit_body" ]]; then
    commit_message+="\n\n${commit_body}"
fi

if [[ -n "$commit_footer" ]]; then
    commit_message+="\n\n${commit_footer}"
fi

# Exit with the constructed commit message
echo -e "$commit_message"
exit 0
