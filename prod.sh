#!/bin/bash

echo "============> \033[31m 切换到pre-release分支 \033[0m"
git checkout pre-release

echo "============> \033[31m 开始更新pre-release分支 \033[0m"
git pull
echo "<============ \033[32m 更新完成 \033[0m"

echo "============> \033[31m 开始从develop分支合并 \033[0m"
git merge develop -m 'merge'
echo "<============ \033[32m 合并完成 \033[0m"

echo "============> \033[31m 开始提交到deploy分支 \033[0m"
git push
echo "<============ \033[32m 提交完成 \033[0m"

echo "============> \033[31m 开始打包 \033[0m"
yarn build

echo "============> \033[31m 切换到develop分支 \033[0m"
git checkout develop
