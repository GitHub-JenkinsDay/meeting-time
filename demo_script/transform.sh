rm *.html
for filename in ./*.md; do
    pat="([^-]*)-([^-]*)-(.*)"
    [[ $filename =~ $pat ]]
    fnbase=${BASH_REMATCH[1]}-${BASH_REMATCH[2]}
    num=${BASH_REMATCH[3]%$'.md'}
    echo ${filename%$'.md'} ${fnbase} ${num}
    markdown ${filename} > ${filename%$'.md'}.html
    let "num++"
    echo "<a href=${fnbase}-${num}.html>NEXT-></a>" >> ${filename%$'.md'}.html
done