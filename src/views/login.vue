<style scoped>

</style>
<template>
    <div class="login">
        <Row>
            <Col style="margin-top:10%;" span="10" offset="10">
            <Card style="width:320px">
                <div style="text-align:center;margin:10px 0">
                    <h3>一套基于 Vue.js 的高质量UI组件库</h3>
                </div>
                <Form ref="formInline">
                    <Form-item prop="user">
                        <Input type="text" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item prop="password">
                        <Input type="password" placeholder="Password">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item>
                        <Button type="primary">登录</Button>
                    </Form-item>
                </Form>
            </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    methods: {
        handleStart() {
            this.$Modal.info({
                title: 'Bravo',
                content: 'Now, enjoy the convenience of iView.'
            });
        }
    }
};
</script>