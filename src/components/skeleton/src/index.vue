<template>
  <div class="cc-skeleton">
    <template v-if="type === 'list'">
      <div>
        <el-skeleton>
          <template #template>
            <el-skeleton-item style="width: 185px" variant="h3" />
          </template>
        </el-skeleton>
        <el-skeleton animated>
          <template #template>
            <el-skeleton-item style="width: 48px; height: 24px" />
          </template>
        </el-skeleton>
        <br />
        <el-card>
          <el-skeleton animated>
            <template #template>
              <div class="cc-skeleton-list-title">
                <div
                  v-for="item in 6"
                  :key="item"
                  class="cc-skeleton-list-title-item"
                >
                  <el-skeleton-item style="width: 100px" variant="h3" />
                  <div>
                    <el-skeleton-item
                      style="width: 64px; height: 48px"
                      variant="text"
                    />
                  </div>
                </div>
              </div>
            </template>
          </el-skeleton>
        </el-card>
        <br />
        <el-card>
          <el-skeleton animated>
            <template #template>
              <div style="display: flex; justify-content: space-between">
                <div>
                  <el-skeleton-item variant="h1" style="width: 200px" />
                </div>
                <div style="display: flex">
                  <el-skeleton-item
                    variant="h1"
                    style="width: 120px; margin-right: 10px"
                  />
                  <el-skeleton-item variant="h1" style="width: 80px" />
                </div>
              </div>
            </template>
          </el-skeleton>
          <el-skeleton animated>
            <template #template>
              <div
                v-for="item in 5"
                :key="item"
                class="cc-skeleton-list-content"
              >
                <div style="flex: 1">
                  <div>
                    <el-skeleton-item variant="h3" style="width: 100px" />
                  </div>
                  <div>
                    <el-skeleton-item variant="h3" style="width: 60%" />
                  </div>
                </div>
                <div>
                  <el-skeleton-item variant="h1" style="width: 165px" />
                </div>
              </div>
              <div class="cc-skeleton-list-content-footer">
                <el-skeleton-item variant="h1" style="width: 102px" />
              </div>
            </template>
          </el-skeleton>
        </el-card>
      </div>
    </template>
    <template v-if="type === 'result'">
      <div>
        <el-skeleton>
          <template #template>
            <el-skeleton-item style="width: 185px" variant="h3" />
          </template>
        </el-skeleton>
        <el-skeleton animated>
          <template #template>
            <el-skeleton-item style="width: 48px; height: 24px" />
          </template>
        </el-skeleton>
        <br />
        <el-card>
          <div class="cc-skeleton-result">
            <div>
              <el-skeleton style="--el-skeleton-circle-size: 64px">
                <template #template>
                  <el-skeleton-item variant="circle" />
                </template>
              </el-skeleton>
            </div>
            <div class="flex" style="margin-top: 20px">
              <el-skeleton animated>
                <template #template>
                  <div class="flex">
                    <el-skeleton-item
                      variant="h1"
                      style="width: 214px; height: 32px; margin-bottom: 8px"
                    />
                  </div>
                  <div class="flex">
                    <el-skeleton-item
                      variant="h1"
                      style="width: 328px; height: 24px"
                    />
                  </div>
                  <el-space class="flex" :size="8" style="margin-top: 24px">
                    <el-skeleton-item
                      variant="h1"
                      style="width: 116px; height: 32px"
                    />
                    <el-skeleton-item
                      variant="h1"
                      style="width: 116px; height: 32px"
                    />
                  </el-space>
                </template>
              </el-skeleton>
            </div>
          </div>
        </el-card>
      </div>
    </template>
    <template v-if="type === 'descriptions'">
      <div>
        <el-skeleton>
          <template #template>
            <el-skeleton-item style="width: 185px" variant="h3" />
          </template>
        </el-skeleton>
        <el-skeleton animated>
          <template #template>
            <el-skeleton-item style="width: 48px; height: 24px" />
          </template>
        </el-skeleton>
        <br />
        <el-card>
          <div v-for="item in 2" :key="item" style="margin-bottom: 16px">
            <el-skeleton animated>
              <template #template>
                <div>
                  <el-skeleton-item
                    variant="h1"
                    style="width: 100px; margin-bottom: 16px"
                  />
                </div>
                <div
                  v-for="c in 3"
                  :key="c"
                  class="cc-skeleton-descriptions-content"
                >
                  <div
                    v-for="item1 in 3"
                    :key="item1"
                    class="cc-skeleton-descriptions-content-item"
                  >
                    <el-skeleton-item style="height: 16px; margin-top: 8px" />
                  </div>
                </div>
              </template>
            </el-skeleton>
          </div>
          <el-divider />
          <div>
            <el-skeleton animated>
              <template #template>
                <el-skeleton-item
                  variant="h1"
                  style="width: 100px; margin-bottom: 16px"
                />
              </template>
            </el-skeleton>
          </div>
          <div class="cc-skeleton-descriptions-bg">
            <div
              v-for="item in 5"
              :key="item"
              class="cc-skeleton-descriptions-bg-item"
            >
              <el-skeleton animated>
                <template #template>
                  <el-skeleton-item
                    style="width: 75px; margin: 0px; height: 24px"
                  />
                </template>
              </el-skeleton>
            </div>
          </div>
          <div
            v-for="item in 4"
            :key="item"
            class="cc-skeleton-descriptions-desc"
          >
            <div
              v-for="item1 in 4"
              :key="item1"
              class="cc-skeleton-descriptions-desc-item"
            >
              <el-skeleton animated>
                <template #template>
                  <el-skeleton-item
                    style="width: 100%; margin: 0px; height: 24px"
                  />
                </template>
              </el-skeleton>
              <el-divider />
            </div>
          </div>
          <div
            style="display: flex; justify-content: flex-end; padding-top: 16px"
          >
            <el-skeleton animated>
              <template #template>
                <el-skeleton-item
                  style="
                     {
                      margin: 0px;
                      height: 32px;
                      float: right;
                      max-width: 630px;
                    }
                  "
                />
              </template>
            </el-skeleton>
          </div>
        </el-card>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: 'list' | 'result' | 'descriptions'
    active?: boolean
  }>(),
  {
    type: 'list',
    active: true,
  }
)
</script>

<style lang="scss" scoped>
.cc-skeleton {
  width: 100%;
  &-list {
    &-title {
      display: flex;
      align-items: center;
      &-item {
        padding-left: 42px;
        flex: 1;
        &:first-child {
          padding-left: 0;
          border-right: 1px solid rgba(0, 0, 0, 0.06);
        }
      }
    }
    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      &-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 24px;
      }
    }
  }
  &-result {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 128px;
  }
  &-descriptions {
    &-content {
      width: 100%;
      justify-content: space-between;
      display: flex;
      &-item {
        flex: 1;
        padding: 0 24px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
      }
    }
    &-bg {
      display: flex;
      background: rgba(0, 0, 0, 0.02);
      padding: 24px 8px;
      &-item {
        flex: 1;
        padding: 0 24px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          flex: 3;
          padding-right: 0;
        }
      }
    }
    &-desc {
      display: flex;
      background: none;
      padding: 24px 8px;
      &-item {
        flex: 1;
        padding: 0 32px 0 20px;
        &:last-child {
          flex: 3;
          padding-right: 0;
        }
      }
    }
  }
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
